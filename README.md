# Personal Portfolio Website

This repository contains the code for my personal portfolio website. It showcases my skills, projects, and professional journey as a software developer. The site is built with Node.js and utilizes technologies like esbuild for JavaScript bundling and TailwindCSS for styling.

## Live Website

View the live portfolio here: [mackenzie-chambers.co.uk](https://mackenzie-chambers.co.uk/)

## Prerequisites

- Node.js (version 21.4.0 recommended)
- If using NVM, the required Node.js version is specified in `.nvmrc`. Compatibility is guaranteed only for versions that match the semver range compatible with v21.4.0.

## Installation

To clone and run this portfolio locally:

```bash
  git clone https://github.com/CalumMackenzie-Chambers/portfolio-website
  cd portfolio-website
  npm install
```

## How to Run

To start the development server:

```bash
  npm run dev
```

This command runs watchers for JavaScript and CSS, along with the live server.

For a production build:

```bash
  npm run build
```

## Deployment

### Deploying to GitHub Pages with GitHub Actions

The project is configured to deploy to GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`. Each push to the main branch triggers the build and deploy process.

Ensure the GitHub Pages source is set to the `gh-pages` branch in your repository settings. For more details, refer to the `deploy.yml` file in the project.

### Sample GitHub Actions Workflow (`deploy.yml`)

```yaml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2

    - name: Install and Build
      run: |
        npm install
        npm run build

    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@4.1.4
      with:
        branch: gh-pages
        folder: dist
````

### Deploying to Netlify

To deploy on Netlify:

1. Connect your GitHub repository to Netlify.
2. Set the ''build command' to `npm run build` and the 'publish directory' to `dist`.

## Attribution

While this is my personal portfolio, released under the MIT license, I appreciate attribution if you use this as a template for your projects.

## License

This project is open-source and available under the MIT License.
