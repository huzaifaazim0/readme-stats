import fetch from "node-fetch";

export async function fetchGitHubStats(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}`);
  const json = await res.json();

  return {
    stars: json.stargazers_count,
    forks: json.forks_count,
    lastCommit: json.pushed_at?.split("T")[0]
  };
}

export async function fetchNpmStats(pkg) {
  const res = await fetch(`https://registry.npmjs.org/${pkg}`);
  const json = await res.json();

  const lastVersion = json["dist-tags"].latest;

  const downloadsRes = await fetch(`https://api.npmjs.org/downloads/point/last-month/${pkg}`);
  const downloadsJson = await downloadsRes.json();

  return {
    version: lastVersion,
    downloads: downloadsJson.downloads
  };
}
