import React from 'react'
import { List, Header, Grid } from 'semantic-ui-react'
import Rating from '../rating/RatingBasic'

const listItemCourse = props => (
  <List.Item
    onClick={() => {
      props.history.push(`/courses/${props.id}`)
    }}
    style={{
      height: 'auto',
      borderBottom: '1px dashed #e1e1e1',
      backgroundColor: 'white',
      padding: '1em',
    }}
  >
    <List.Content>
      <div>
        <Grid stackable>
          <Grid.Row style={{ paddingBottom: '0' }}>
            <Header as="h3" style={{ fontWeight: 400 }}>
              <Header.Content>
                {props.name}
              </Header.Content>
            </Header><br />
          </Grid.Row>
          <Grid.Row style={{ paddingBottom: '0', paddingTop: '0.2em' }}>
            <Header as="h4" style={{ fontWeight: 400 }}>
              <Header.Content>
                {props.Prof.name} / {props.Depts[0].shortname}
              </Header.Content>
            </Header>
          </Grid.Row>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={10} style={{ paddingLeft: '0' }}>
              <div>
                <span style={{ marginRight: '0.5em' }}>
                  <Rating value={props.Stat.scoreOverall} />
                </span>
                <span>
                  ({props.Stat.countReview}人评价)
                </span>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    </List.Content>
  </List.Item>
)

export default listItemCourse
