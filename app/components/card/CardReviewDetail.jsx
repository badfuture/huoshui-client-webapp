
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Header, Image, Icon, Label, Divider, Table } from 'semantic-ui-react'
import moment from 'moment'
import TableSecondaryStat from '../table/TableSecondaryStat'

const CardReviewDetail = props => (
  <Card fluid raised style={{ boxShadow: 'none', padding: '1em' }}>
    <Card.Content>
      <Card.Header>
        <Header as="h4">
          <Image floated="left" size="mini" circular src={props.author.avatar} />
          评 <Link to={`/profs/${props.prof.id}`}>{props.prof.name}</Link> 的 <Link to={`/courses/${props.course.id}`}>{props.course.name}</Link>
        </Header>
      </Card.Header>
      <Card.Meta>
        <span>
          <span>{`by ${props.author.username}`}</span>
          <span style={{ float: 'right' }}>{moment(props.review.createdAt).fromNow()}</span>
        </span>
      </Card.Meta>
      <Card.Description>
        {props.review.text}
        {(props.tags && props.tags.length != 0) &&
          <div>
            <Divider hidden />
            <div>
              标签：
              {props.tags.map(tag => (
                <Label
                  key={tag.id}
                  as="span" basic
                  style={{ backgroundColor: 'rgba(77, 157, 217, 0.78)', color: 'white' }}
                >
                  {tag.name}
                </Label>
              ))}
            </div>
          </div>
        }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <TableSecondaryStat
        rateHomework={props.review.rateHomework}
        rateAttend={props.review.rateAttend}
        rateBirdy={props.review.rateBirdy}
        rateExam={props.review.rateExam}
        hasExam={props.review.hasExam}
        examprep={props.review.examprep}
        openbook={props.review.openbook}
        oldquestion={props.review.oldquestion}
        easymark={props.review.easymark}
      />
    </Card.Content>
  </Card>
)

export default CardReviewDetail
