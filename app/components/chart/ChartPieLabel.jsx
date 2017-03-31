import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

const data01 = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
                  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
                  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 }]


const ChartPieLabel = () => (
  <ResponsiveContainer>
    <PieChart>
      <Pie isAnimationActive={false} data={data01} fill="#8884d8" label />
    </PieChart>
  </ResponsiveContainer>
)

export default ChartPieLabel
