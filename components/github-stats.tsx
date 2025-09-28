'use client'

import { useEffect, useState } from 'react'
import { Star, GitFork, Users, Heart } from 'lucide-react'

interface GitHubStats {
  stars: number
  forks: number
  watchers: number
  open_issues: number
}

interface GitHubRepo {
  stargazers_count: number
  forks_count: number
  watchers_count: number
  open_issues_count: number
  subscribers_count: number
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true)
        
        // Get repo details from environment variables
        const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER || 'AutomatosAI'
        const repo = process.env.NEXT_PUBLIC_GITHUB_REPO || 'automatos-ai'
        
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Automatos-AI-Website'
          }
        })
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }
        
        const data: GitHubRepo = await response.json()
        
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
          watchers: data.watchers_count,
          open_issues: data.open_issues_count
        })
      } catch (err) {
        console.error('Failed to fetch GitHub stats:', err)
        setError(err instanceof Error ? err.message : 'Failed to load stats')
        // Show zeros for now since repo is new
        setStats({
          stars: 0,
          forks: 0,
          watchers: 0,
          open_issues: 0
        })
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center animate-pulse">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-300 dark:bg-gray-700" />
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    )
  }

  if (!stats) return null

  const statItems = [
    {
      icon: Star,
      label: 'GitHub Stars',
      value: formatNumber(stats.stars),
      description: 'Community recognition',
      color: 'text-yellow-500'
    },
    {
      icon: GitFork,
      label: 'Forks',
      value: formatNumber(stats.forks),
      description: 'Active contributions',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      label: 'Watchers',
      value: formatNumber(stats.watchers),
      description: 'Following development',
      color: 'text-green-500'
    },
    {
      icon: Heart,
      label: 'Open Issues',
      value: formatNumber(stats.open_issues),
      description: 'Active development',
      color: 'text-red-500'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      {statItems.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#026181] to-[#07D6A2] flex items-center justify-center">
            <stat.icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm font-semibold mb-1">{stat.label}</div>
          <div className="text-xs text-muted-foreground">{stat.description}</div>
        </div>
      ))}
    </div>
  )
}
