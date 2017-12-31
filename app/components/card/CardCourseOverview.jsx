import React from 'react'
import { Card, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './styles/CardCourseOverview.scss'

const CardCourseOverview = (props) => {
  let tags = props.Tags
  if (tags && tags.length) {
    tags = tags.filter(tag => (tag.stat && tag.stat.count >= 2))
    tags = tags.sort((a, b) => {
      if (a.stat.count > b.stat.count) { return -1 }
      if (a.stat.count < b.stat.count) { return 1 }
      if (a.stat.count == b.stat.count) { return 0 }
    })
  }
  return (
    <Card
      as={Link}
      to={`/courses/${props.id}`}
      link
    >
      <Card.Content>

        <Card.Header>
          <Header as="h3">
            <Image floated="left" size="mini" src={props.Depts[0].icon} />
            <div className={styles.header}>
              <span><Link to={`/profs/${props.Prof.id}`}>{props.Prof.name}</Link></span>
            </div>
          </Header>
        </Card.Header>
        <div className={styles.subheader}>
          <span>{props.name}</span><br />
          {
            (props.Tags && props.isTagShown) &&
            <span>
              {tags[0] && `${tags[0].name}`} {tags[1] && `   \\   ${tags[1].name}`}
            </span>
          }
        </div>
      </Card.Content>
    </Card>
  )
}
export default CardCourseOverview
