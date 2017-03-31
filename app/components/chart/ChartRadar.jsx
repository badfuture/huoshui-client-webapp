import React from 'react'
import { Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const data = [
 { subject: 'Math', A: 120, B: 110, fullMark: 150 },
 { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
 { subject: 'English', A: 86, B: 130, fullMark: 150 },
]


const ChartRadar = () => (
  <ResponsiveContainer>
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <PolarGrid />
      <Legend />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
    </RadarChart>
  </ResponsiveContainer>
)

export default ChartRadar
