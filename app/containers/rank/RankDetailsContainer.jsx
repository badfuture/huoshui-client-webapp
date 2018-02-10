import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Icon, Divider, Grid, Segment, Label } from 'semantic-ui-react'
import * as rankActions from '../../actions/rankActions'
import ListCourse from '../../components/list/ListCourse'
import TableCourseStandard from '../../components/table/TableCourseStandard'
import TableProfStandard from '../../components/table/TableProfStandard'
import rankMeta from '../../data/rank.json'
import deptMeta from '../../data/dept.json'
import Spinner from '../../components/spinner/Spinner'

class RankDetailsContainer extends Component {
  state = {
    deptSelected: null,
  }

  componentDidMount() {
    const view = this.props.match.params.id
    const meta = rankMeta.filter(item => item.id === this.props.match.params.id)[0]
    this.props.switchView(view, meta)
    this.props.initializeRankList(meta)
  }

  loadDeptList = (dept) => {
    const meta = rankMeta.filter(item => item.id === this.props.match.params.id)[0]
    const deptShortname = dept.header
    if (this.state.deptSelected && (this.state.deptSelected.header == deptShortname)) {
      // toggle off dept filter
      this.setState({
        deptSelected: null,
      })
      this.props.initializeRankList(meta, null)
    } else {
      // filter by dept
      this.setState({
        deptSelected: dept,
      })
      this.props.initializeRankList(meta, deptShortname)
    }
  }

  render() {
    let subheader = ''
    if (this.state.deptSelected) {
      subheader = `( ${this.state.deptSelected.header} )`
    }

    return (
      <div className="container-main">
        <Container>
          <Header as="h2" color="blue">
            <Icon name="remove bookmark" />
            <Header.Content>
              {this.props.meta.header} {`${subheader}`}
            </Header.Content>
          </Header>
          <Divider hidden />

          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
                {(!this.props.isFetching && (this.props.meta.type == 'course')) &&
                  <TableCourseStandard {...this.props} />
                }
                {(!this.props.isFetching && (this.props.meta.type == 'prof')) &&
                  <TableProfStandard {...this.props} />
                }
                {this.props.isFetching &&
                  <div style={{ marginTop: '5em' }} >
                    <Spinner />
                  </div>
                }
              </Grid.Column>
              <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
                <Segment color="blue" style={{ paddingTop: '1.5em' }} >
                  <Header as="h3" style={{ fontWeight: 400 }}>
                    <Header.Content>
                      {'分类排行 · · · · · ·'}
                    </Header.Content>
                  </Header>
                  <div>
                    {
                      deptMeta.map(
                        (dept) => {
                          let color = 'grey'
                          if (this.state.deptSelected && dept.header == this.state.deptSelected.header) {
                            color = 'blue'
                          }
                          return (
                            <Label
                              key={dept.header}
                              basic
                              color={color}
                              style={{
                                display: 'inline-block',
                                margin: '5px 10px 5px 0',
                                minWidth: '36px',
                              }}
                              onClick={() => { this.loadDeptList(dept) }}
                            >
                              {dept.header}
                            </Label>
                          )
                        },
                      )
                    }
                  </div>
                  <Divider hidden />
                  <Header as="h3" style={{ fontWeight: 400 }}>
                    <Header.Content>
                      {'关于排行 · · · · · ·'}
                    </Header.Content>
                  </Header>
                  <p>
                    {`${this.props.meta.header
                   }的排名来自于每一个活水用户的评价。`
                  + `活水根据每门课上过的人数以及该课程或老师所得的评价等综合数据，`
                  + `通过算法分析自动生成即时排名。`}
                  </p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

RankDetailsContainer.defaultProps = {
  meta: {
    header: '',
  },
}

// maps state from store to props
const mapStateToProps = state => ({
  currentView: state.rankDetailList.currentView,
  meta: state.rankDetailList.meta,
  data: state.rankDetailList.data,
  isFetching: state.rankDetailList.isFetching,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  switchView: (view, meta) => dispatch(rankActions.switchView(view, meta)),
  initializeRankList: (meta, deptShortname) => dispatch(rankActions.initializeRankList(meta, deptShortname)),
})
export default connect(mapStateToProps, mapActionToProps)(RankDetailsContainer)
