
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Users, TrendingUp, Clock } from 'lucide-react'

const benefits = [
  {
    icon: Code,
    title: 'Developer Experience',
    description: 'Intuitive APIs, comprehensive documentation, and powerful CLI tools that make building with AI agents a joy.',
    stats: '50% faster development',
    features: ['TypeScript support', 'Hot reloading', 'Debugging tools', 'VS Code extensions']
  },
  {
    icon: Users,
    title: 'Enterprise Scale',
    description: 'Built to handle enterprise workloads with high availability, fault tolerance, and horizontal scaling.',
    stats: '99.9% uptime',
    features: ['Multi-region deployment', 'Load balancing', 'Auto-scaling', 'Disaster recovery']
  },
  {
    icon: TrendingUp,
    title: 'Cost Optimization',
    description: 'Intelligent resource allocation and efficient agent utilization to minimize operational costs.',
    stats: 'Up to 40% cost reduction',
    features: ['Resource optimization', 'Usage analytics', 'Cost monitoring', 'Efficiency metrics']
  },
  {
    icon: Clock,
    title: 'Time to Market',
    description: 'Pre-built integrations and templates to get your AI workflows running in production quickly.',
    stats: 'Deploy in minutes',
    features: ['Quick start templates', 'Pre-built connectors', 'One-click deployment', 'Migration tools']
  }
]

export function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose{' '}
            <span className="gradient-text">Automatos AI</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From rapid prototyping to enterprise deployment, Automatos AI delivers value at every stage of your AI journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 card-glow hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <span className="text-sm text-primary font-medium">{benefit.stats}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {benefit.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
