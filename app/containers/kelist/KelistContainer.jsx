import React from 'react'
import { Container, Card, Grid, Header, Button, Segment, Label, Divider } from 'semantic-ui-react'
import CardKelist from '../../components/card/CardKelist'
import dataKelist from '../../data/kelist.json'
import MenuKelist from '../../components/menu/MenuKelist'
import deptMeta from '../../data/dept.json'

const items = dataKelist

const KelistContainer = () => (
  <div className="container-main-grey">
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
            <Card.Group itemsPerRow={3} stackable>
              {items.map(
                item => <CardKelist
                  {...item}
                />,
              )}
            </Card.Group>
          </Grid.Column>
          <Grid.Column
            width={5}
            style={{
              paddingLeft: '1.0rem',
            }}
          >
            <Segment color="blue" style={{ paddingTop: '1.5em' }} >
              <Header as="h3" style={{ fontWeight: 400 }}>
                <Header.Content>
                  {'相关标签 · · · · · ·'}
                </Header.Content>
              </Header>
              <div>
                {
                      deptMeta.map(
                        (dept) => {
                          let color = 'grey'
                          if (false) {
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
                              onClick={() => { }}
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
                  {'关于课列 · · · · · ·'}
                </Header.Content>
              </Header>
              <p>
                {`课列来自于每一个活水用户的创造。`
                  + `所有设置为公开的课列会显示在这里。`
                  + `你可以创建自己的课列，也可以收藏公开课列。`}
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default KelistContainer
