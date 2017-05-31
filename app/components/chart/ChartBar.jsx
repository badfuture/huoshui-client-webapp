import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, ResponsiveContainer } from 'recharts'

const COLORS = ['rgb(151, 187, 205)', 'rgb(151, 187, 205)', 'rgb(151, 187, 205)']

const chartBar = (props) => {
  const data = [
    { name: '专业', value: ((props.professional) ? props.professional.toFixed(1) / 1 : 0) },
    { name: '表达', value: ((props.expressive) ? props.expressive.toFixed(1) / 1 : 0) },
    { name: '友好', value: ((props.kind) ? props.kind.toFixed(1) / 1 : 0) },
  ]
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          barCategoryGap="30%"
        >
          <XAxis type="category" dataKey="name" stroke="rgb(151, 187, 205)" />
          <YAxis type="number" domain={[0, 6]} mirror tick interval={0} hide ticks={[0, 1, 2, 3, 4, 5]} />
          <CartesianGrid strokeDasharray="7 7" />
          <Bar dataKey="value" fill="rgba(151, 187, 205,0.4)" barCategoryGap isAnimationActive={false} label>
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
}

export default chartBar
