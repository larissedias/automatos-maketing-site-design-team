
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Play, 
  Pause, 
  Settings, 
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  Bot
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'

// Predefined agent types from the backend system
const agents = [
  {
    id: 'agent-001',
    name: 'CodeArchitect',
    type: 'code_architect',
    status: 'active',
    performance: 96.5,
    tasksCompleted: 1247,
    skills: ['code_analysis', 'architecture_design', 'best_practices', 'refactoring'],
    specializations: ['system_design', 'code_quality', 'performance_optimization'],
    lastActive: '2 minutes ago',
    avatar: '🏗️'
  },
  {
    id: 'agent-002',
    name: 'BugHunter',
    type: 'bug_hunter',
    status: 'active',
    performance: 94.2,
    tasksCompleted: 892,
    skills: ['debugging', 'error_analysis', 'log_investigation', 'root_cause_analysis'],
    specializations: ['crash_analysis', 'memory_leaks', 'performance_bugs'],
    lastActive: '5 minutes ago',
    avatar: '🐛'
  },
  {
    id: 'agent-003',
    name: 'SecurityGuard',
    type: 'security_expert',
    status: 'active',
    performance: 98.1,
    tasksCompleted: 567,
    skills: ['vulnerability_scanning', 'code_review', 'threat_modeling', 'compliance_check'],
    specializations: ['web_security', 'api_security', 'data_protection'],
    lastActive: '1 minute ago',
    avatar: '🛡️'
  },
  {
    id: 'agent-004',
    name: 'PerformanceOptimizer',
    type: 'performance_optimizer',
    status: 'idle',
    performance: 92.7,
    tasksCompleted: 234,
    skills: ['performance_analysis', 'bottleneck_detection', 'optimization', 'profiling'],
    specializations: ['database_optimization', 'frontend_performance', 'api_optimization'],
    lastActive: '15 minutes ago',
    avatar: '⚡'
  },
  {
    id: 'agent-005',
    name: 'TestMaster',
    type: 'test_engineer',
    status: 'active',
    performance: 91.8,
    tasksCompleted: 1156,
    skills: ['test_generation', 'coverage_analysis', 'quality_assurance', 'automation'],
    specializations: ['unit_testing', 'integration_testing', 'e2e_testing'],
    lastActive: 'Just now',
    avatar: '🧪'
  },
  {
    id: 'agent-006',
    name: 'DocuMentor',
    type: 'documentation_specialist',
    status: 'active',
    performance: 89.3,
    tasksCompleted: 678,
    skills: ['documentation_generation', 'api_docs', 'code_comments', 'user_guides'],
    specializations: ['technical_writing', 'api_documentation', 'tutorials'],
    lastActive: '8 minutes ago',
    avatar: '📚'
  },
  {
    id: 'agent-007',
    name: 'DataAnalyst',
    type: 'data_analyst',
    status: 'maintenance',
    performance: 87.9,
    tasksCompleted: 445,
    skills: ['data_processing', 'pattern_recognition', 'report_generation', 'visualization'],
    specializations: ['metrics_analysis', 'trend_detection', 'business_intelligence'],
    lastActive: '1 hour ago',
    avatar: '📊'
  },
  {
    id: 'agent-008',
    name: 'InfraManager',
    type: 'infrastructure_manager',
    status: 'active',
    performance: 95.4,
    tasksCompleted: 789,
    skills: ['deployment', 'monitoring', 'scaling', 'resource_management'],
    specializations: ['kubernetes', 'cloud_platforms', 'ci_cd'],
    lastActive: '3 minutes ago',
    avatar: '🏗️'
  }
]

const statusStyles: Record<string, string> = {
  active: 'bg-green-500/10 text-green-400 border-green-500/20',
  idle: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  maintenance: 'bg-red-500/10 text-red-400 border-red-500/20'
}

const statusIcons: Record<string, any> = {
  active: CheckCircle,
  idle: Clock,
  maintenance: AlertCircle
}

export function AgentRoster() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  
  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search agents by name, type, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-secondary/50 border-secondary focus:border-primary/50"
          />
        </div>
        <Button variant="outline" className="shrink-0">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAgents.map((agent, index) => {
          const StatusIcon = statusIcons[agent.status]
          
          return (
            <motion.div
              key={agent.id}
              className="glass-card p-6 card-glow hover:border-primary/20 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedAgent(agent.id)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-lg">
                    {agent.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{agent.name}</h3>
                    <p className="text-xs text-muted-foreground">{agent.type}</p>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {agent.status === 'active' ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Pause Agent
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Start Agent
                        </>
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between mb-4">
                <Badge className={statusStyles[agent.status]}>
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {agent.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{agent.performance}%</span>
              </div>

              {/* Performance Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Performance</span>
                  <span>{agent.performance}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${agent.performance}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-lg font-bold">{agent.tasksCompleted}</p>
                  <p className="text-xs text-muted-foreground">Tasks Completed</p>
                </div>
                <div>
                  <p className="text-lg font-bold">{agent.skills.length}</p>
                  <p className="text-xs text-muted-foreground">Skills</p>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Primary Skills</p>
                <div className="flex flex-wrap gap-1">
                  {agent.skills.slice(0, 3).map(skill => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill.replace('_', ' ')}
                    </Badge>
                  ))}
                  {agent.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{agent.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Last Active */}
              <p className="text-xs text-muted-foreground">
                Last active: {agent.lastActive}
              </p>
            </motion.div>
          )
        })}
      </div>

      {filteredAgents.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Bot className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No agents found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or create a new agent.
          </p>
        </motion.div>
      )}
    </div>
  )
}
