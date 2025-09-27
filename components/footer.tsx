'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Twitter, Linkedin, Instagram, MessageSquare, Heart } from 'lucide-react'

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer className="bg-card/20 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">Automatos AI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The open-source multi-agent orchestration platform for modern AI workflows and DevOps integration.
              <div className="mt-4">                <a href="mailto:gerard@automatos.app" className="text-sm text-muted-foreground hover:text-primary transition-colors">                  📧 gerard@automatos.app                </a>              </div>
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/AutomatosAI/automatos-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/20 hover:bg-primary/10"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/AutomatosAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/20 hover:bg-primary/10"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/automatos-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/20 hover:bg-primary/10"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/automatosai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/20 hover:bg-primary/10"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://discord.gg/E2kkYPCD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/20 hover:bg-primary/10"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-sm text-muted-foreground hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#technical" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technical</a></li>
              <li><a href="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/AutomatosAI/automatos-ai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://github.com/AutomatosAI/automatos-ai/issues" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Issues</a></li>
              <li><a href="https://github.com/AutomatosAI/automatos-ai/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="https://github.com/AutomatosAI/automatos-ai/discussions" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Discussions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/E2kkYPCD" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
              <li><a href="https://x.com/AutomatosAI" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/automatos-ai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/automatosai/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 Automatos AI. All rights reserved.</p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the open source community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
