import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['#CED3DC', 'rgba(33, 133, 208, 0.5)', 'rgba(33, 133, 208, 0.8)']

const ChartPieGap = (props) => {
  const data = [
    { name: '差评率', value: props.countBadReview },
    { name: '中评率', value: props.countAverageReview },
    { name: '好评率', value: props.countGoodReview },
  ]
  const tooltipFormatter = value => (
    `${((value / props.countReview) * 100).toFixed(0)}%`
  )
  const renderCustomizedLabel = ({ percent }) => (
    `${(percent * 100).toFixed(0)}%`
  )
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        style={{
          left: 0,
          right: 0,
          top: '50%',
          position: 'absolute',
          textAlign: 'center',
          fontSize: '2em',
          color: 'rgb(75, 172, 255)',
        }}
      >
        {
          (props.countReview !== 0)
          ? `${((props.countGoodReview / props.countReview) * 100).toFixed(0)}%`
          : '暂无评价'
        }
      </div>
      <ResponsiveContainer>
        <PieChart
          margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
        >
          <Pie
            data={data}
            isAnimationActive={false}
            innerRadius={45}
            outterRadius={55}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) =>
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />,
            )}
          </Pie>
          <Tooltip formatter={tooltipFormatter} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartPieGap
