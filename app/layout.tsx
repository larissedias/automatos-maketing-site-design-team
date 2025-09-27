import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Automatos AI - Multi-Agent Orchestration Platform',
  description: 'Advanced multi-agent orchestration platform with context engineering, workflow management, and intelligent automation for enterprise AI systems.',
  keywords: 'AI agents, orchestration, context engineering, workflow automation, multi-agent systems, enterprise AI',
  authors: [{ name: 'Automatos AI Team' }],
  creator: 'Automatos AI',
  publisher: 'Automatos AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Automatos AI - Multi-Agent Orchestration Platform',
    description: 'Advanced multi-agent orchestration platform with context engineering, workflow management, and intelligent automation for enterprise AI systems.',
    url: 'https://automatos.app',
    siteName: 'Automatos AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Automatos AI - Multi-Agent Orchestration Platform',
    description: 'Advanced multi-agent orchestration platform with context engineering, workflow management, and intelligent automation for enterprise AI systems.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} gradient-bg min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
