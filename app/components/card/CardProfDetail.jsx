import React, { PropTypes } from 'react'
import { Card, Header, Image, Divider } from 'semantic-ui-react'
import Rating from '../rating/RatingBasic'
import styles from './styles/CardProfDetail.scss'

const propTypes = {
  name: PropTypes.string,
  motto: PropTypes.string,
  intro: PropTypes.string,
  email: PropTypes.string,
  education: PropTypes.string,
  research: PropTypes.string,
  scoreOverall: PropTypes.number,
  onClickHandler: PropTypes.func,
}

const defaultProps = {
  name: '',
  motto: '',
  intro: '',
  email: '',
  education: '',
  research: '',
  scoreOverall: null,
  onClickHandler: () => {},
}

const CardProfDetail = props => (
  <Card fluid style={{ boxShadow: 'none' }} onClick={props.onClickHandler}>
    <Card.Content>
      <Image floated="left" size="mini" src="/images/sample/sample6.png" />
      <Card.Header>
        <Header as="h4">
          老师：{props.name}
        </Header>
      </Card.Header>
      <Card.Meta>
        <Rating value={props.scoreOverall} />
      </Card.Meta>
      <Card.Description>
        {!!(props.intro) &&
          <div>
            <span>
              简介：{props.intro}
            </span>
            <Divider hidden className={styles.dividerMargin} />
          </div>
        }
        {!!(props.motto) &&
          <div>
            <span>
              语录：{props.motto}
            </span>
            <Divider hidden className={styles.dividerMargin} />
          </div>
        }
        {!!(props.education) &&
          <div>
            <span>
              教育：{props.education}
            </span>
            <Divider hidden className={styles.dividerMargin} />
          </div>
        }
        {!!(props.research) &&
          <div>
            <span>
              研究：{props.research}
            </span>
            <Divider hidden className={styles.dividerMargin} />
          </div>
        }
        {!!(props.email) &&
          <div>
            <span>
              联系方式：{props.email}
            </span>
          </div>
        }
      </Card.Description>
    </Card.Content>
  </Card>
)


// props validation
CardProfDetail.propTypes = propTypes
CardProfDetail.defaultProps = defaultProps

export default CardProfDetail
