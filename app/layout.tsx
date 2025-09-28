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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} gradient-bg min-h-screen antialiased`}>
        
        {/* Off-bar */}
        <header className="fixed top-0 left-0 w-full bg-transparent text-white z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            {/* Logo */}
         <div className="h-10 w-auto">
  <img
    src="/logo_full_horizontal_duocolor-white.png"
    alt="Automatos AI Logo"
    className="h-full w-auto transition-transform duration-200 hover:scale-105"
  />
</div>

            {/* CTA Button */}
            <a href="https://automatos.app/dashboard"
              className="rounded bg-[#ff6b35] px-4 py-2 font-semibold text-white hover:bg-[#e65c28] transition"
            ><button>
              Try it now! </button>
            </a>
          </div>
        </header>

        {/* Push content down so it doesn't overlap header */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )


}
