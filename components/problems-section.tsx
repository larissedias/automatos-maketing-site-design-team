'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AlertTriangle, RefreshCw, Zap, Users, MessageSquare, Brain } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: "Context Confusion",
    current: "Agent gets context wrong, produces irrelevant results",
    solution: "Smart Task Assignment",
    gradient: "from-red-400 to-red-600"
  },
  {
    icon: RefreshCw,
    title: "Agent Burnout",
    current: "Agent forgets things mid-conversation, makes mistakes",
    solution: "Persistent Memory System",
    gradient: "from-orange-400 to-orange-600"
  },
  {
    icon: Zap,
    title: "Fabrication Issues",
    current: "Agent makes up results when overloaded",
    solution: "Specialized Agent Teams",
    gradient: "from-yellow-400 to-yellow-600"
  },
  {
    icon: Users,
    title: "Single Agent Limits",
    current: "One-on-one interaction becomes insufficient",
    solution: "Multi-Agent Orchestration",
    gradient: "from-green-400 to-green-600"
  },
  {
    icon: MessageSquare,
    title: "Constant Re-explanation",
    current: "Always explaining system from scratch",
    solution: "System-Living Agents",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    icon: Brain,
    title: "No Memory/Learning",
    current: "Agent doesn't learn from previous interactions",
    solution: "Context Engineering Docs",
    gradient: "from-purple-400 to-purple-600"
  }
]

export function ProblemsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            The Problems Every Developer Faces With AI Agents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sound familiar? These frustrations drove the creation of Automatos AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 card-glow hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#026181] to-[#07D6A2] flex items-center justify-center">                <problem.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-red-400 font-bold text-sm mt-1">❌</span>
                  <p className="text-sm text-muted-foreground">{problem.current}</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-green-400 font-bold text-sm mt-1">✅</span>
                  <p className="text-sm font-medium text-primary">{problem.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
