'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Users, BookOpen, Bug, Sparkles, TestTube } from 'lucide-react'
import { GitHubStats } from './github-stats'

export function OpenSourceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="open-source" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Built by the Community, for the{' '}
            <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join developers contributing to the future of AI orchestration. 
            Open source, transparent, and driven by innovation.
          </p>
        </motion.div>

        {/* Live GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GitHubStats />
        </motion.div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 card-glow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Start Contributing Today</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're fixing bugs, adding features, or improving documentation, 
                  every contribution makes Automatos AI better for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://github.com/AutomatosAI/automatos-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gradient-accent hover:opacity-90 transition-opacity"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                  <a 
                    href="https://discord.gg/E2kkYPCD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-10 px-4 py-2 border-primary/20 hover:bg-primary/10"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Join Discord
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">🐛 Bug fixes and improvements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">✨ New features and enhancements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">📚 Documentation improvements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">🧪 Testing and quality assurance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
