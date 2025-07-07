import fs from "fs/promises";

export async function injectStats({ repo, pkg, file = "README.md" }) {
  const [ghStats, npmStats] = await Promise.all([
    fetchGitHubStats(repo),
    fetchNpmStats(pkg)
  ]);

  const statsBlock = `
| Metric           | Value                         |
|------------------|-------------------------------|
| ⭐ Stars          | ${ghStats.stars}               |
| 🍴 Forks         | ${ghStats.forks}               |
| 🕒 Last Commit   | ${ghStats.lastCommit}          |
| 📦 NPM Version   | ${npmStats.version}            |
| 📥 Downloads/mo  | ${npmStats.downloads}          |
`;

  const readme = await fs.readFile(file, "utf8");
  const updated = readme.replace(
    /<!--stats-->([\s\S]*?)<!--\/stats-->/,
    `<!--stats-->\n${statsBlock.trim()}\n<!--/stats-->`
  );

  await fs.writeFile(file, updated, "utf8");
  console.log("✅ Stats injected into README.md");
}

import { fetchGitHubStats, fetchNpmStats } from "./fetchStats.js";
