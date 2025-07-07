# 📊 readme-stats

> Automatically inject live GitHub and npm stats into your `README.md`  
> Keep your project metadata fresh with zero manual effort

---

## ✅ Features

- 🔁 Injects stats like **stars**, **forks**, **last commit**, **downloads**, and **npm version**
- 📝 Reads and updates between `<!--stats--> ... <!--/stats-->` in `README.md`
- 📦 Fetches from GitHub and npm APIs
- 🛠 CLI and programmatic API
- ⚙️ Configurable file path and formatting

---

## 🚀 Installation

```bash
npm install -g readme-stats
````

Or use directly with:

```bash
npx readme-stats --repo your-user/repo-name --pkg your-npm-package
```

---

## 📂 Usage

### 1. Add a placeholder in your `README.md`

```markdown
<!--stats-->
<!--/stats-->
```

### 2. Run the CLI

```bash
npx readme-stats --repo huzaifaazim/readme-stats --pkg readme-stats
```

### Output injected example

```markdown
<!--stats-->
| Metric           | Value           |
|------------------|-----------------|
| ⭐ Stars          | 24              |
| 🍴 Forks         | 5               |
| 🕒 Last Commit   | 2025-07-07      |
| 📦 NPM Version   | 1.0.0           |
| 📥 Downloads/mo  | 1221            |
<!--/stats-->
```

---

## 🧪 CLI Options

| Flag     | Alias | Description               | Required | Default     |
| -------- | ----- | ------------------------- | -------- | ----------- |
| `--repo` | `-r`  | GitHub repo (`user/repo`) | ✅        | -           |
| `--pkg`  | `-p`  | npm package name          | ✅        | -           |
| `--file` | `-f`  | Path to README file       | ❌        | `README.md` |

---

## 💻 Programmatic Usage

```js
import { injectStats } from "readme-stats";

await injectStats({
  repo: "huzaifaazim/readme-stats",
  pkg: "readme-stats",
  file: "README.md"
});
```

---

## 📦 Use Cases

* Keep project badges current
* Auto-update on publish or deploy
* Automate OSS project health signals

---

## 🧱 Roadmap

* [ ] Badge-style markdown mode
* [ ] GitHub Actions integration
* [ ] Custom template injection

---

## 👥 Contributing

Pull requests are welcome!
Please file an issue first to discuss changes or suggestions.

---

## 📄 License

MIT © 2025 Huzaifa Azim
