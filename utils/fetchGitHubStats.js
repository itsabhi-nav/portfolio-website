export async function fetchGitHubStats(username = 'itsabhi-nav') {
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: 'application/vnd.github+json'
        },
        next: { revalidate: 3600 }
      })
  
      if (!userRes.ok) throw new Error('Failed to fetch user profile')
  
      const user = await userRes.json()
  
      const starredRes = await fetch(`https://api.github.com/users/${username}/starred`)
      const starred = await starredRes.json()
  
      const topRepos = starred
        .slice(0, 3) // top 3 starred repos
        .map((repo) => ({
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          stars: repo.stargazers_count,
          language: repo.language
        }))
  
      return {
        name: user.name,
        avatarUrl: user.avatar_url,
        publicRepos: user.public_repos,
        followers: user.followers,
        following: user.following,
        htmlUrl: user.html_url,
        topRepos
      }
    } catch (error) {
      console.error('GitHub Fetch Error:', error.message)
      return {
        name: username,
        avatarUrl: '',
        publicRepos: 0,
        followers: 0,
        following: 0,
        htmlUrl: `https://github.com/${username}`,
        topRepos: []
      }
    }
  }
  