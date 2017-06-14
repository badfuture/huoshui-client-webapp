import React from 'react'
import { List, Header, Grid } from 'semantic-ui-react'
import Rating from '../rating/RatingBasic'

const listItemCourse2 = props => (
  <List.Item
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
                name
              </Header.Content>
            </Header><br />
          </Grid.Row>
          <Grid.Row style={{ paddingBottom: '0', paddingTop: '0.2em' }}>
            <Header as="h4" style={{ fontWeight: 400 }}>
              <Header.Content>
                profname / deptname
              </Header.Content>
            </Header>
          </Grid.Row>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={16} style={{ paddingLeft: '0' }}>
              <div>
                <span style={{ marginRight: '0.5em' }}>
                  <Rating value={3} />
                </span>
                <span style={{ marginRight: '0.5em' }}>
                4
                </span>
                <span>
                  (3人评价)
                </span>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    </List.Content>
  </List.Item>
)

export default listItemCourse2
