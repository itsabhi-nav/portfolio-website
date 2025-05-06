'use client'
import { useEffect, useState } from 'react'
import { fetchGitHubStats } from '../utils/fetchGitHubStats'
import { Github } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function GitHubStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGitHubStats('itsabhi-nav').then((data) => {
      setStats(data)
      setLoading(false)
    })
  }, [])

  if (loading || !stats) {
    return (
      <div className="text-center py-16 text-muted-foreground animate-pulse">
        Fetching GitHub data...
      </div>
    )
  }

  return (
    <section className="px-6 py-24 bg-muted/5">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-2">
          <Github className="w-6 h-6" /> GitHub Highlights
        </h2>
        <Image
          src={stats.avatarUrl}
          alt="Avatar"
          width={80}
          height={80}
          className="rounded-full mx-auto mb-2 border"
        />
        <h3 className="text-lg font-semibold">{stats.name}</h3>
        <Link
          href={stats.htmlUrl}
          target="_blank"
          className="text-primary text-sm underline hover:text-primary/80"
        >
          Visit GitHub Profile
        </Link>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold">{stats.publicRepos}</p>
            <p className="text-sm text-muted-foreground">Repos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold">{stats.followers}</p>
            <p className="text-sm text-muted-foreground">Followers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold">{stats.following}</p>
            <p className="text-sm text-muted-foreground">Following</p>
          </CardContent>
        </Card>
      </div>


      {/* Starred Repos */}
      {stats.topRepos.length > 0 && (
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">⭐ Top Starred Repositories</h3>
          <div className="space-y-6">
            {stats.topRepos.map((repo, idx) => (
              <Card key={idx}>
                <CardContent className="p-4 space-y-1">
                  <Link
                    href={repo.html_url}
                    className="text-lg font-medium text-primary underline"
                    target="_blank"
                  >
                    {repo.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {repo.description || 'No description'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ⭐ {repo.stars} | {repo.language || 'Unknown'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
