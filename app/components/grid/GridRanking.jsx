import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import CardRanking from '../card/CardRanking'

const items = [
  {
    image: '/images/dept/full/civil.png',
    header: '课程综合榜',
    description: '按分数和好评率排',
  },
  {
    image: '/images/dept/full/physics.jpg',
    header: '老师综合榜',
    description: '按分数和好评率排',
  },
  {
    image: '/images/dept/full/dna.jpeg',
    header: '热度榜',
    description: '按参与评价人数排',
  },
  {
    image: '/images/dept/full/electrical.jpg',
    header: '口碑榜',
    description: '按标签正面数量排',
  },
  {
    image: '/images/dept/full/force.jpg',
    header: '水课榜',
    description: '按水课相关标签数量和数据',
  },
  {
    image: '/images/dept/full/material.jpeg',
    header: '差评榜',
    description: '那些不想上第二次的课',
  },
  {
    image: '/images/dept/full/math.jpg',
    header: '考试榜',
    description: '按考试难度排',
  },
  {
    image: '/images/dept/full/mechanical.jpg',
    header: '作业榜',
    description: '按作业多少排',
  },
]

const GridRanking = () => (
  <Container>
    <Card.Group itemsPerRow={4} stackable>
      {items.map(
        item => <CardRanking
          {...item}
        />,
      )}
    </Card.Group>
  </Container>
)

export default GridRanking
