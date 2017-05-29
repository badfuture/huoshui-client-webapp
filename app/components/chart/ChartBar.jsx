import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['rgb(151, 187, 205)', 'rgb(151, 187, 205)', 'rgb(151, 187, 205)']
const data = [
      { name: '专业', 得分: 3.5 },
      { name: '表达', 得分: 4.1 },
      { name: '友好', 得分: 5.0 },
]
const SimpleBarChart = props => (
  <div style={{ width: '100%', height: '100%' }}>
    <ResponsiveContainer>
      <BarChart
        data={data}
        isAnimationActive={false}
        barCategoryGap="30%"
      >
        <XAxis type="category" dataKey="name" stroke="rgb(151, 187, 205)" />
        <YAxis type="number" domain={[0, 'dataMax +1']} mirror tick interval={0} hide ticks={[0, 1, 2, 3, 4, 5]} />
        <CartesianGrid strokeDasharray="7 7" />
        <Tooltip />
        <Bar dataKey="得分" fill="rgba(151, 187, 205,0.4)" barCategoryGap label>
          {
          data.map((entry, index) => (
            <Cell key={entry.name} stroke={COLORS[index]} strokeWidth={1.2} />
          ))
        }
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
)


export default SimpleBarChart
