import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const imgSrc1 = '../images/dept/icons/Dna.png'
const imgSrc2 = '../images/sample/sample2.png'
const imgSrc3 = '../images/sample/sample3.jpg'

const CardFeed = () => (
  <Card>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image={imgSrc1} />
          <Feed.Content>
            <Feed.Date content="1 day ago" />
            <Feed.Summary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)

export default CardFeed
