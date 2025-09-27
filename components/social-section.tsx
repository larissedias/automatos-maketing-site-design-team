'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Twitter, Linkedin, Instagram, MessageSquare } from 'lucide-react'

export function SocialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/AutomatosAI/automatos-ai',
      icon: Github,
      description: 'Star our repository',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/E2kkYPCD',
      icon: MessageSquare,
      description: 'Join our community',
      color: 'hover:text-indigo-500'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/AutomatosAI',
      icon: Twitter,
      description: 'Follow updates',
      color: 'hover:text-blue-500'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/automatos-ai',
      icon: Linkedin,
      description: 'Professional network',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/automatosai/',
      icon: Instagram,
      description: 'Behind the scenes',
      color: 'hover:text-pink-500'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground mb-8">
            Stay updated with the latest developments, join discussions, and be part of the Automatos AI community.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 min-w-[120px] ${social.color}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
            >
              <social.icon className="w-8 h-8 mb-2 transition-colors" />
              <span className="font-medium text-sm">{social.name}</span>
              <span className="text-xs text-muted-foreground">{social.description}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
