
'use client'

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const data = [
  { time: '00:00', agents: 20, workflows: 8, tasks: 45 },
  { time: '04:00', agents: 18, workflows: 6, tasks: 32 },
  { time: '08:00', agents: 24, workflows: 12, tasks: 78 },
  { time: '12:00', agents: 26, workflows: 15, tasks: 95 },
  { time: '16:00', agents: 23, workflows: 11, tasks: 67 },
  { time: '20:00', agents: 21, workflows: 9, tasks: 54 }
]

export function ActivityChart() {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Activity Overview</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="agents" 
              stroke="#ff6b35" 
              strokeWidth={2}
              name="Active Agents"
            />
            <Line 
              type="monotone" 
              dataKey="workflows" 
              stroke="#60B5FF" 
              strokeWidth={2}
              name="Workflows"
            />
            <Line 
              type="monotone" 
              dataKey="tasks" 
              stroke="#72BF78" 
              strokeWidth={2}
              name="Tasks"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
