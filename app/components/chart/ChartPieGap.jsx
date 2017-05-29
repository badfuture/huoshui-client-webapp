import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: '差评率', value: 100 },
  { name: '中评率', value: 300 },
  { name: '好评率', value: 800 },
]
const COLORS = ['#CED3DC', '#4E8098', 'rgba(75, 172, 255, 0.8)']

const ChartPieGap = () => (
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
      50%
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
          label
        >
          {data.map((entry, index) =>
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />,
          )}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

export default ChartPieGap
