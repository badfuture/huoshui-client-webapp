import React from 'react'
import { Card, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './styles/CardCourseOverview.scss'

const CardCourseOverview = (props) => {
  let tags = props.Tags
  if (tags && tags.length) {
    tags = tags.sort((a, b) => {
      if (a.stat.count < b.stat.count) { return false }
      if (a.stat.count > b.stat.count) { return true }
      return false
    })
  }
  return (
    <Card
      as={Link}
      to={`/courses/${props.id}`}
      link
    >
      <Card.Content>
        <Image floated="left" size="mini" src={props.Depts[0].icon} />
        <Card.Header>
          <Header as="h3">
            <div className={styles.header}>
              <span><Link to={`/profs/${props.Prof.id}`}>{props.Prof.name}</Link></span>
            </div>
          </Header>
        </Card.Header>
        <div className={styles.subheader}>
          <span>{props.name}</span><br />
          <span>
            {tags[0] && `${tags[0].name}`} {tags[1] && `   \\   ${tags[1].name}`}
          </span>
        </div>
      </Card.Content>
    </Card>
  )
}
export default CardCourseOverview
