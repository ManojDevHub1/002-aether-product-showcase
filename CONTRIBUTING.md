# Contributing to AETHER ONE

Thank you for your interest in contributing to **AETHER ONE**! We welcome bug reports, feature suggestions, and pull requests.

## Development Workflow

1. **Fork the Repository**: Create your own copy of the repository.
2. **Clone Locally**:
   ```bash
   git clone https://github.com/your-username/002-aether-product-showcase.git
   cd 002-aether-product-showcase
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
5. **Verify Code Quality & Build**:
   ```bash
   npm run build
   ```
6. **Submit a Pull Request**: Push your branch and open a PR with a detailed description.

## Code Standards

- Follow TypeScript strict type definitions (`strict: true`).
- Maintain zero lint warnings or compiler errors.
- Ensure all animations conform to Apple's custom ease-out timing curve (`cubic-bezier(0.16, 1, 0.3, 1)`).
- Honor WCAG 2.1 AAA accessibility rules.
