import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import FormFeedback from '../form/FormFeedback'

const imgSrc = '/images/barcode.jpg'
const PageFeedback = () => (
  <Grid columns={2} padded="vertically">
    <Grid.Row>
      <Grid.Column width={5}>
        <Card raised image={imgSrc} />
      </Grid.Column>
      <Grid.Column width={11}>
        <FormFeedback />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default PageFeedback
