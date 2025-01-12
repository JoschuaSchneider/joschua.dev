import { queryGithubAPI } from "@/utils/github";

type Repo = {
  name: string
  description: string;
  nameWithOwner: string;
  stargazerCount: number;
  primaryLanguage: {
    name: string;
  }
}

const getGithubRepos = async () => {
  const repos = await queryGithubAPI(`#graphql
    fragment Repo on Repository {
      name
      description
      nameWithOwner
      stargazerCount
      primaryLanguage {
        name
      }
    }
    query {
      viewer {
        repoUseErrorBoundary: repository(name: "use-error-boundary") {
          ...Repo
        }
        repoKlatsche: repository(name: "klatsche") {
          ...Repo
        }
        repoMehrzahl: repository(name: "mehrzahl") {
          ...Repo
        }
        repoDotfiles: repository(name: "dotfiles") {
          ...Repo
        }
      }
    }
  `)

  return [
    repos.data.viewer.repoUseErrorBoundary as Repo,
    repos.data.viewer.repoKlatsche as Repo,
    repos.data.viewer.repoMehrzahl as Repo,
    repos.data.viewer.repoDotfiles as Repo,
  ];
}

export const Repos = async () => {
  const repos = await getGithubRepos();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {repos.map((repo) => (
        <div
          key={repo.name}
          className="px-6 py-4 border border-indigo-100 rounded-md dark:border-gray-800"
        >
          <a
            href={`https://github.com/${repo.nameWithOwner}`}
            className="block mb-1 text-lg font-semibold text-indigo-700 dark:text-indigo-500 hover:underline"
          >
            {repo.name}
          </a>
          <p className="mb-4 text-gray-800 dark:text-gray-300">
            {repo.description}
          </p>
          <div className="flex text-gray-700 dark:text-gray-400">
            <div className="mr-4 text-gray-800 dark:text-gray-500">
              <svg
                className="inline-flex h-4 mb-px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>{' '}
              {repo.stargazerCount}
            </div>
            <div className="ml-auto">{repo.primaryLanguage.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
