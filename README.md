# Flavien's Portfolio

Personal portfolio website for **Flavien Debar**, Senior Platform & DevOps Engineer, built with [Astro](https://astro.build/).

The portfolio showcases my experience and projects around **AWS, Kubernetes, Terraform, Platform Engineering, GitOps, CI/CD and AI-driven operations**.

## ✨ Highlights

- 🧑‍💻 Professional experience and technical background
- ☁️ Cloud & Platform Engineering expertise
- ☸️ Kubernetes, AWS and GitOps projects
- 🤖 **KubeSage** — AI-assisted Kubernetes incident analysis platform
- 🛠️ Selected engineering projects and achievements
- 📱 Responsive design for desktop and mobile
- ⚡ Fast static site powered by Astro

## 🛠️ Tech Stack

| Technology                    | Purpose                          |
| ----------------------------- | -------------------------------- |
| [Astro](https://astro.build/) | Static site framework            |
| TypeScript                    | Application logic and components |
| HTML / CSS                    | UI and styling                   |
| GitHub Pages                  | Hosting and deployment           |
| GitHub Actions                | CI/CD and automated deployment   |

## 🚀 Quick Start

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/fdebar/portfolio.git
cd portfolio
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at:

```text
http://localhost:4321
```

### Production Build

Build the production version:

```bash
npm run build
```

The generated website is available in:

```text
dist/
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Astro CLI

Run Astro CLI commands:

```bash
npm run astro ...
```

For the complete list of available commands:

```bash
npm run astro -- --help
```

## 📁 Project Structure

```text
/
├── public/                  # Static assets
│   └── ...
├── src/
│   ├── components/          # Reusable UI components
│   ├── layouts/             # Page layouts
│   └── pages/               # Website pages and routes
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## 🌐 Deployment

The portfolio is deployed as a static website using **GitHub Pages**.

The deployment pipeline is handled through **GitHub Actions**, building the Astro application and publishing the generated `dist/` directory.

Production deployments are versioned using Git tags, making it possible to associate a deployed website with a specific portfolio release.

## 🤖 Featured Project — KubeSage

[KubeSage](https://github.com/fdebar/kubesage) is an AI-assisted Kubernetes incident analysis platform designed to help engineers understand and troubleshoot production incidents.

It combines:

- Kubernetes
- Prometheus
- Loki
- Grafana
- Tempo
- OpenTelemetry
- GitOps
- FastAPI
- React
- OpenAI-compatible LLMs

The project reflects my interest in **Platform Engineering, observability and AI-driven operations**, and serves as a practical example of how I approach complex infrastructure problems end-to-end.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
