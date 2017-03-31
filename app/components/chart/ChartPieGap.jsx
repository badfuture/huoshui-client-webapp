import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
                  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const ChartPieGap = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          fill="#8884d8"
          isAnimationActive={false}
          paddingAngle={5}
          innerRadius={60}
        >
          {data.map(
          (entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />,
        )}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
)

export default ChartPieGap
