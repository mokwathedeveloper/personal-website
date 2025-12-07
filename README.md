# Modern Developer Portfolio

A modern, performant portfolio website built with Next.js 14, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 14.2+ (App Router)
- **Language:** TypeScript 5.6+
- **Styling:** Tailwind CSS v4 (Beta)
- **UI Components:** Shadcn/UI + Radix UI
- **Theme:** next-themes (Dark mode support)
- **Package Manager:** pnpm 9+
- **Node Version:** 20.x LTS

## Project Structure

```
personal-website/
├── apps/
│   └── web/              # Next.js application
├── packages/
│   ├── ui/               # Shared UI components
│   ├── config/           # Shared configurations
│   └── types/            # Shared TypeScript types
├── .github/
│   └── workflows/        # CI/CD pipelines
└── pnpm-workspace.yaml   # Monorepo configuration
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm 9.x or higher

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Development

### Code Quality

- **ESLint:** Configured with Next.js rules
- **Prettier:** Code formatting with Tailwind plugin
- **TypeScript:** Strict mode enabled
- **Husky:** Git hooks for pre-commit checks
- **Commitlint:** Conventional commits enforcement

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: code style changes
refactor: code refactoring
perf: performance improvements
test: add or update tests
build: build system changes
ci: CI/CD changes
chore: other changes
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
pnpm build
pnpm start
```

## License

MIT

## Author

Mokwa The Developer
