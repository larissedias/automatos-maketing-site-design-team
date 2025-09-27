
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BarChart, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Cpu,
  Database,
  Network,
  Zap,
  Activity,
  Users,
  Target,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Download,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, BarChart as RechartsBarChart, Bar } from 'recharts'

const performanceMetrics = [
  {
    label: 'System Uptime',
    value: '99.7%',
    change: '+0.2%',
    icon: Activity,
    color: 'text-green-400',
    trend: 'up'
  },
  {
    label: 'Total Cost',
    value: '$2,847',
    change: '-$156',
    icon: DollarSign,
    color: 'text-blue-400',
    trend: 'down'
  },
  {
    label: 'Token Usage',
    value: '1.2M',
    change: '+234K',
    icon: Zap,
    color: 'text-orange-400',
    trend: 'up'
  },
  {
    label: 'Avg Response',
    value: '1.8s',
    change: '-0.3s',
    icon: Clock,
    color: 'text-purple-400',
    trend: 'down'
  }
]

const systemPerformanceData = [
  { time: '00:00', cpu: 34, memory: 67, network: 12, storage: 45 },
  { time: '04:00', cpu: 28, memory: 62, network: 8, storage: 43 },
  { time: '08:00', cpu: 56, memory: 78, network: 24, storage: 52 },
  { time: '12:00', cpu: 68, memory: 82, network: 32, storage: 58 },
  { time: '16:00', cpu: 45, memory: 71, network: 18, storage: 49 },
  { time: '20:00', cpu: 38, memory: 65, network: 14, storage: 46 }
]

const costAnalysisData = [
  { date: '2024-01-01', api_calls: 2400, tokens: 180000, cost: 240 },
  { date: '2024-01-02', api_calls: 2800, tokens: 210000, cost: 280 },
  { date: '2024-01-03', api_calls: 3200, tokens: 240000, cost: 320 },
  { date: '2024-01-04', api_calls: 2950, tokens: 220000, cost: 295 },
  { date: '2024-01-05', api_calls: 3400, tokens: 255000, cost: 340 },
  { date: '2024-01-06', api_calls: 3100, tokens: 232000, cost: 310 },
  { date: '2024-01-07', api_calls: 2700, tokens: 202000, cost: 270 }
]

const agentUtilizationData = [
  { agent: 'CodeArchitect', utilization: 89, tasks: 1247, efficiency: 94.2 },
  { agent: 'BugHunter', utilization: 76, tasks: 892, efficiency: 91.8 },
  { agent: 'SecurityGuard', utilization: 92, tasks: 567, efficiency: 97.1 },
  { agent: 'TestMaster', utilization: 68, tasks: 1156, efficiency: 89.3 },
  { agent: 'PerformanceOptimizer', utilization: 45, tasks: 234, efficiency: 92.7 },
  { agent: 'DocuMentor', utilization: 71, tasks: 678, efficiency: 88.9 }
]

const systemAlerts = [
  {
    id: 'alert-001',
    type: 'warning',
    title: 'High Memory Usage',
    description: 'Memory utilization exceeded 80% threshold',
    severity: 'medium',
    timestamp: '5 minutes ago',
    component: 'Agent Runtime'
  },
  {
    id: 'alert-002',
    type: 'info',
    title: 'Cost Optimization Available',
    description: 'Potential 15% cost reduction identified',
    severity: 'low',
    timestamp: '1 hour ago',
    component: 'Cost Management'
  },
  {
    id: 'alert-003',
    type: 'success',
    title: 'Performance Improved',
    description: 'Average response time decreased by 0.3s',
    severity: 'low',
    timestamp: '2 hours ago',
    component: 'Performance'
  }
]

const alertStyles: Record<string, string> = {
  warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  success: 'bg-green-500/10 text-green-400 border-green-500/20',
  error: 'bg-red-500/10 text-red-400 border-red-500/20'
}

const alertIcons: Record<string, any> = {
  warning: AlertTriangle,
  info: Activity,
  success: CheckCircle,
  error: AlertTriangle
}

export function PerformanceAnalytics() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d')
  const [selectedMetric, setSelectedMetric] = useState('all')
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
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Performance <span className="gradient-text">Analytics</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Monitor system performance, costs, and optimization opportunities
          </p>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="gradient-accent hover:opacity-90">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Report
          </Button>
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {performanceMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="glass-card p-6 card-glow hover:border-primary/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                <span>{metric.change}</span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">{metric.value}</h3>
              <p className="text-muted-foreground text-sm">{metric.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Analytics Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Tabs defaultValue="system" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid bg-secondary/50">
            <TabsTrigger value="system" className="flex items-center space-x-2">
              <Cpu className="w-4 h-4" />
              <span className="hidden sm:inline">System</span>
            </TabsTrigger>
            <TabsTrigger value="costs" className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Costs</span>
            </TabsTrigger>
            <TabsTrigger value="agents" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Agent Metrics</span>
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="hidden sm:inline">Alerts</span>
            </TabsTrigger>
            <TabsTrigger value="optimization" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Optimization</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="system" className="space-y-6">
            {/* System Performance Chart */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>System Performance Metrics</span>
                  <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                    <SelectTrigger className="w-24 bg-secondary/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1h">1h</SelectItem>
                      <SelectItem value="24h">24h</SelectItem>
                      <SelectItem value="7d">7d</SelectItem>
                      <SelectItem value="30d">30d</SelectItem>
                    </SelectContent>
                  </Select>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={systemPerformanceData}>
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
                      <Area 
                        type="monotone" 
                        dataKey="cpu" 
                        stackId="1"
                        stroke="#ff6b35" 
                        fill="#ff6b35"
                        fillOpacity={0.3}
                        name="CPU Usage (%)"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="memory" 
                        stackId="2"
                        stroke="#60B5FF" 
                        fill="#60B5FF"
                        fillOpacity={0.3}
                        name="Memory Usage (%)"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="network" 
                        stackId="3"
                        stroke="#72BF78" 
                        fill="#72BF78"
                        fillOpacity={0.3}
                        name="Network I/O (%)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Resource Usage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'CPU Usage', value: 68, icon: Cpu, color: 'text-orange-400' },
                { name: 'Memory Usage', value: 82, icon: Database, color: 'text-blue-400' },
                { name: 'Network I/O', value: 32, icon: Network, color: 'text-green-400' },
                { name: 'Storage Usage', value: 58, icon: Database, color: 'text-purple-400' }
              ].map((resource, index) => (
                <motion.div
                  key={resource.name}
                  className="glass-card p-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <resource.icon className={`w-6 h-6 ${resource.color}`} />
                    <span className="text-2xl font-bold">{resource.value}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{resource.name}</p>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${resource.value}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="costs" className="space-y-6">
            {/* Cost Analysis Chart */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Cost Analysis & Token Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={costAnalysisData}>
                      <XAxis 
                        dataKey="date" 
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
                        dataKey="cost" 
                        stroke="#ff6b35" 
                        strokeWidth={3}
                        name="Daily Cost ($)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="api_calls" 
                        stroke="#60B5FF" 
                        strokeWidth={2}
                        name="API Calls (000s)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Cost Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'API Costs', value: '$1,847', percentage: 65, color: 'from-orange-500 to-red-500' },
                { label: 'Infrastructure', value: '$745', percentage: 26, color: 'from-blue-500 to-cyan-500' },
                { label: 'Storage', value: '$255', percentage: 9, color: 'from-green-500 to-emerald-500' }
              ].map((cost, index) => (
                <motion.div
                  key={cost.label}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-1">{cost.value}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{cost.label}</p>
                    <div className="w-full bg-secondary rounded-full h-2 mb-2">
                      <div 
                        className={`bg-gradient-to-r ${cost.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${cost.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{cost.percentage}% of total</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="agents" className="space-y-6">
            {/* Agent Utilization Chart */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Agent Utilization & Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={agentUtilizationData}>
                      <XAxis 
                        dataKey="agent" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                        angle={-45}
                        textAnchor="end"
                        height={80}
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
                      <Bar 
                        dataKey="utilization" 
                        fill="#60B5FF" 
                        name="Utilization (%)"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar 
                        dataKey="efficiency" 
                        fill="#72BF78" 
                        name="Efficiency (%)"
                        radius={[4, 4, 0, 0]}
                      />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            {/* System Alerts */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>System Alerts & Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemAlerts.map((alert, index) => {
                    const AlertIcon = alertIcons[alert.type]
                    
                    return (
                      <motion.div
                        key={alert.id}
                        className={`p-4 rounded-lg border ${alertStyles[alert.type]}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex items-start space-x-3">
                          <AlertIcon className="w-5 h-5 mt-0.5" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-sm">{alert.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {alert.severity}
                              </Badge>
                            </div>
                            <p className="text-sm opacity-90 mb-2">{alert.description}</p>
                            <div className="flex items-center justify-between text-xs opacity-75">
                              <span>Component: {alert.component}</span>
                              <span>{alert.timestamp}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Performance Optimization Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center text-muted-foreground">
                    Performance optimization recommendations and insights will be displayed here
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
