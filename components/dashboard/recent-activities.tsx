
'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, Info, Clock } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'success',
    title: 'Agent "CodeArchitect" completed task',
    description: 'Successfully analyzed 450 files and generated optimization report',
    time: '2 minutes ago',
    icon: CheckCircle
  },
  {
    id: 2,
    type: 'warning',
    title: 'High memory usage detected',
    description: 'Agent "DataProcessor" consuming 85% of allocated memory',
    time: '5 minutes ago',
    icon: AlertTriangle
  },
  {
    id: 3,
    type: 'info',
    title: 'New workflow started',
    description: 'Bug hunter workflow initiated for repository analysis',
    time: '12 minutes ago',
    icon: Info
  },
  {
    id: 4,
    type: 'pending',
    title: 'Document processing queued',
    description: '15 documents added to knowledge base processing queue',
    time: '18 minutes ago',
    icon: Clock
  }
]

const typeStyles: Record<string, string> = {
  success: 'text-green-400 bg-green-400/10',
  warning: 'text-yellow-400 bg-yellow-400/10',
  info: 'text-blue-400 bg-blue-400/10',
  pending: 'text-gray-400 bg-gray-400/10'
}

export function RecentActivities() {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${typeStyles[activity.type]}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{activity.title}</p>
              <p className="text-muted-foreground text-xs mt-1">{activity.description}</p>
              <p className="text-muted-foreground text-xs mt-2">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
