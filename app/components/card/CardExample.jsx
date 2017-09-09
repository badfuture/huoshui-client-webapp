import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    key: 1,
    header: '程序员养成指南',
    description: '本指南仅供参考，学完这里的所有课程的用户请与活水管理员联系',
    meta: '15人推荐',
    raised: false,
  },
  {
    key: 2,
    header: '不水的水课推荐',
    description: '师傅领进门，修行在个人。水课有干活。',
    meta: '5人推荐',
    raised: false,
  },
  {
    header: '冷门好课推荐',
    description: '不忍心这些课被埋没，特此整理出来',
    meta: '15人推荐',
    raised: false,
  },
  {
    header: '选前需三思',
    description: '有一定几率挂科的课，请慎入',
    meta: '12人推荐',
    raised: false,
  },
]

const CardExample = () => (
  <Card.Group items={items} itemsPerRow={4} stackable />
)

export default CardExample
