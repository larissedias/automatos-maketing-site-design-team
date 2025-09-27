
'use client'

import { motion } from 'framer-motion'
import { Server, Database, Network, Shield } from 'lucide-react'

const healthMetrics = [
  {
    name: 'API Gateway',
    status: 'healthy',
    uptime: '99.9%',
    icon: Network,
    color: 'text-green-400'
  },
  {
    name: 'Database',
    status: 'healthy',
    uptime: '99.7%',
    icon: Database,
    color: 'text-green-400'
  },
  {
    name: 'Agent Runtime',
    status: 'healthy',
    uptime: '99.8%',
    icon: Server,
    color: 'text-green-400'
  },
  {
    name: 'Security Layer',
    status: 'healthy',
    uptime: '100%',
    icon: Shield,
    color: 'text-green-400'
  }
]

export function SystemHealth() {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">System Health</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthMetrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            className="p-4 rounded-lg border border-border/50 hover:border-primary/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <metric.icon className={`w-5 h-5 ${metric.color}`} />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            <h4 className="font-medium text-sm">{metric.name}</h4>
            <p className="text-muted-foreground text-xs">Uptime: {metric.uptime}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
