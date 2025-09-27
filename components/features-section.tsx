'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Zap, Network, Cog, Target, GitBranch } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "Context Engineering",
    description: "Advanced context retrieval and management system with vector embeddings, relevance scoring, and multi-strategy synthesis for intelligent agent decision-making.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Network,
    title: "Agent Collaboration",
    description: "Sophisticated coordination system supporting Sequential, Parallel, Hierarchical, and Peer-to-Peer collaboration patterns with predictive workflow optimization.",
    gradient: "from-primary to-orange-400"
  },
  {
    icon: Zap,
    title: "Learning Engine",
    description: "Pattern recognition system with historical analysis, success rate tracking, and adaptive performance optimization for continuous agent improvement.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Cog,
    title: "Cognitive Task Tools",
    description: "LLM-powered task decomposition and content generation tools that automatically break down complex requirements into executable workflows.",
    gradient: "from-orange-400 to-yellow-500"
  },
  {
    icon: Target,
    title: "Multiple Agents Collaborate",
    description: "One professional orchestrator assigns tasks to specialized agents. Code architects, security experts, data analysts - each focused on what they do best.",
    gradient: "from-red-400 to-orange-500"
  },
  {
    icon: GitBranch,
    title: "Agents Learn From Mistakes",
    description: "Pattern recognition with historical analysis means agents improve over time. SSH access lets them debug, fix, and learn from real system interactions.",
    gradient: "from-orange-500 to-red-600"
  }
]

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features for{' '}
            <span className="gradient-text">Modern AI Workflows</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with advanced context engineering and intelligent agent coordination. 
            Our platform combines sophisticated AI orchestration with developer-friendly tools 
            for building the next generation of autonomous systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 card-glow hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
