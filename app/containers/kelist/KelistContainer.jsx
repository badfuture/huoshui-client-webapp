import React from 'react'
import { Container, Card, Grid, Header, Button } from 'semantic-ui-react'
import CardKelist from '../../components/card/CardKelist'
import dataKelist from '../../data/kelist.json'
import MenuKelist from '../../components/menu/MenuKelist'

const items = dataKelist

const KelistContainer = () => (
  <div className="container-main-grey">
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
            <Header size="large">公共课列</Header>
            <MenuKelist />
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
              borderLeft: '#928e8e 2px dashed',
            }}
          >
            <Header size="large">我的课列</Header>
            <Button
              color="blue"
              attached="bottom"
              content="创建新的课列" icon="plus" labelPosition="left"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default KelistContainer
