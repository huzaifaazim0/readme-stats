#!/usr/bin/env node
import minimist from "minimist";
import { injectStats } from "../lib/injectStats.js";

const args = minimist(process.argv.slice(2), {
  string: ["repo", "pkg", "file"],
  alias: { r: "repo", p: "pkg", f: "file" }
});

if (!args.repo || !args.pkg) {
  console.error("❌ Usage: readme-stats --repo user/repo --pkg package-name");
  process.exit(1);
}

injectStats({
  repo: args.repo,
  pkg: args.pkg,
  file: args.file || "README.md"
});
