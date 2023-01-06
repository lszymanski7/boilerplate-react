/* istanbul ignore file */

// Function ➞ displays repository details in the console (GitHub REST API)
const github = (owner, repo) => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then((response) => response.json())
        .then((data) => {
            const details = {
                description: data.description,
                forks: data.forks_count,
                homepage: data.homepage,
                html_url: data.html_url,
                license: data.license.spdx_id,
                name: data.name,
                owner: data.owner.login,
                size: data.size,
                stargazers: data.stargazers_count,
                topics: data.topics,
                watchers: data.watchers_count
            }
            console.dir(details)
        })
        .catch((error) => {
            console.error(error)
        })
}

export { github as default }
