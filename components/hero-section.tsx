
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, ArrowRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* 1️⃣ Static background image */}
 <div
  className="absolute inset-0 z-0 origin-center"
  style={{
    backgroundImage: "url('/bg_automatos.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    transform: 'scale(1)', // shrink image to 50%
  }}
/>

  {/* 2️⃣ Optional overlay to darken image */}
  <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

  {/* 3️⃣ Mouse-follow radial glow */}
  <div
    className="absolute inset-0 z-20 pointer-events-none"
    style={{
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #008080 0%, transparent 15%)`,
      opacity: 0.5, // adjust brightness
    }}
  />

  {/* 4️⃣ Hero content */}
  <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

            {/* Logo mark */}
    <div className="mx-auto mb-6 w-50 h-50 flex items-center justify-center opacity-80">
      <img
        src="/logomark_white.svg"
        alt="Automatos Logo"
        className="w-50 h-50 object-contain opacity-50"
      />
    </div>


          <div className="space-y-4">
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-orange-500"></span><br/>Stop Fighting Your AI Agent
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Built for developers tired of agents that lose context, fabricate results, and require constant re-explanation. The open-source multi-agent orchestration platform that combines advanced context engineering with persistent memory. Build, deploy, and scale intelligent workflows that learn from and adapt to your infrastructure.
            </motion.p>
          </div>

          <motion.div 
            className="flex justify-center items-center space-x-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Open Source
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse" />
              Development phase
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              Cloud Native
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
           {/* <a href="https://github.com/AutomatosAI/automatos-ai" target="_blank" rel="noopener noreferrer"><Button size="lg" className="gradient-accent hover:opacity-90 transition-opacity group">
              <Github className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button></a> */}
            
           
             <a href="https://automatos.app/dashboard"
              className="rounded bg-[#ff6b35] px-4 py-2 font-semibold text-white hover:bg-[#e65c28] transition"
            ><button>  Try it now! </button>
            </a>

          </motion.div>
          
          
        </motion.div>
      </div>
    </section>
  )
}
