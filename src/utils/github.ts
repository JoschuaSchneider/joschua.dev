const githubAPIEndpoint: string = process.env.GITHUB_API_ENDPOINT ?? ''

export const queryGithubAPI = async (query: string) => {
  const response = await fetch(githubAPIEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  })

  return await response.json()
}
