'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Database, Zap, Shield } from 'lucide-react'

const architecture = [
  {
    icon: Brain,
    title: "Context Engineering",
    description: "Advanced embedding generation, vector similarity search, and context synthesis with PgVector and Redis for intelligent context management.",
    tech: ["PgVector", "Vector Embeddings", "Context Synthesis", "Relevance Scoring"]
  },
  {
    icon: Zap,
    title: "Learning & Analytics",
    description: "Pattern recognition with scikit-learn clustering, temporal decay analysis, and performance tracking for continuous system optimization.",
    tech: ["scikit-learn", "Pattern Recognition", "Performance Analytics", "Temporal Analysis"]
  },
  {
    icon: Database,
    title: "Cognitive Task Tools (IBM Research)",
    description: "Increases AI performance from 26.7% to 43.3% on complex tasks. Prevents overload through intelligent task decomposition - no more fabricated results.",
    tech: ["Agent Collaboration", "Workflow Management", "Real-time Coordination", "Multi-Agent Systems"]
  },
  {
    icon: Shield,
    title: "MCP Integration",
    description: "Enhanced Model Context Protocol bridge with SSH integration, secure command execution, sandboxing, and comprehensive monitoring.",
    tech: ["SSH Integration", "Secure Execution", "Sandboxing", "Monitoring"]
  }
]

export function TechnicalSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="technical" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Built on{' '}
            <span className="gradient-text">Modern Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatos AI combines proven technologies with innovative approaches to create 
            a robust, scalable platform for multi-agent orchestration. Our architecture 
            is designed for flexibility, performance, and developer productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {architecture.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 card-glow hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-4">Development Status</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
              Automatos AI is currently in active development. We're building a comprehensive 
              platform that combines context engineering with practical multi-agent orchestration. 
              Join our community to help shape the future of AI agent coordination.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                Active Development
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                Open Source
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Community Driven
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
