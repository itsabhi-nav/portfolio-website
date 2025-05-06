// utils/fetchGitHubStats.js
export async function fetchGitHubStats(username = 'itsabhi-nav') {
    const res = await fetch(`https://api.github.com/users/${username}`)
    if (!res.ok) throw new Error('Failed to fetch GitHub user')
  
    const data = await res.json()
    return {
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      htmlUrl: data.html_url,
      name: data.name
    }
  }
  