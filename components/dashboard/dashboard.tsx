
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Bot, 
  FileText, 
  GitBranch, 
  Activity,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Zap,
  Users,
  Database,
  Cpu
} from 'lucide-react'
import { MetricCard } from './metric-card'
import { ActivityChart } from './activity-chart'
import { RecentActivities } from './recent-activities'
import { SystemHealth } from './system-health'
import { QuickActions } from './quick-actions'

const metrics = [
  {
    title: 'Active Agents',
    value: '24',
    change: '+3',
    changeType: 'positive' as const,
    icon: Bot,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Running Workflows',
    value: '12',
    change: '+2',
    changeType: 'positive' as const,
    icon: GitBranch,
    gradient: 'from-primary to-orange-400'
  },
  {
    title: 'Documents Processed',
    value: '1,247',
    change: '+89',
    changeType: 'positive' as const,
    icon: FileText,
    gradient: 'from-red-500 to-pink-500'
  },
  {
    title: 'System Health',
    value: '98.7%',
    change: '+0.3%',
    changeType: 'positive' as const,
    icon: Activity,
    gradient: 'from-green-500 to-emerald-500'
  }
]

const systemStats = [
  {
    label: 'CPU Usage',
    value: '34%',
    icon: Cpu,
    color: 'text-blue-400'
  },
  {
    label: 'Memory Usage',
    value: '67%',
    icon: Database,
    color: 'text-green-400'
  },
  {
    label: 'Active Users',
    value: '18',
    icon: Users,
    color: 'text-purple-400'
  },
  {
    label: 'API Calls/min',
    value: '342',
    icon: Zap,
    color: 'text-orange-400'
  }
]

export function Dashboard() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome to <span className="gradient-text">Automotas AI</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Monitor and manage your multi-agent orchestration platform
        </p>
      </motion.div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Metrics Grid */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </motion.div>

      {/* System Stats */}
      <motion.div
        className="glass-card p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold mb-4">System Resources</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {systemStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ActivityChart />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <RecentActivities />
        </motion.div>
      </div>

      {/* System Health */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <SystemHealth />
      </motion.div>
    </div>
  )
}
