'use client'

import { useEffect, useState } from 'react'
import { fetchGitHubStats } from '../utils/fetchGitHubStats'
import { Github } from 'lucide-react'

export default function GitHubStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGitHubStats('itsabhi-nav')
      .then((data) => {
        setStats(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('GitHub API error:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="text-center py-10 text-sm text-muted-foreground">
        Fetching GitHub stats...
      </div>
    )
  }

  return (
    <section className="px-6 py-20 bg-muted/5">
      <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        <Github /> GitHub Highlights
      </h2>

      <div className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="border rounded-lg p-6 bg-background shadow-sm">
          <p className="text-2xl font-bold text-foreground">{stats.publicRepos}</p>
          <p className="text-sm text-muted-foreground mt-1">Public Repos</p>
        </div>
        <div className="border rounded-lg p-6 bg-background shadow-sm">
          <p className="text-2xl font-bold text-foreground">{stats.followers}</p>
          <p className="text-sm text-muted-foreground mt-1">Followers</p>
        </div>
        <div className="border rounded-lg p-6 bg-background shadow-sm">
          <p className="text-2xl font-bold text-foreground">{stats.following}</p>
          <p className="text-sm text-muted-foreground mt-1">Following</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href={stats.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-primary underline hover:text-primary/80 transition"
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  )
}
