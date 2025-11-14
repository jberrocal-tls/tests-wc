# Quick Start Guide

Get up and running with the Web Components monorepo in minutes!

## Prerequisites

- Node.js v18+
- npm v7+

## Installation & Setup

### One-Command Setup

```bash
npm run setup
```

This will:
1. Install all dependencies for all workspaces
2. Build both Lit and Stencil component packages

### Manual Setup

If you prefer to do it step by step:

```bash
# Install dependencies
npm install

# Build component packages
npm run build:packages
```

## Running the Demo

### Start the Next.js App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You'll see:
- **Home page** - Navigation cards for both components
- **/lit** - Lit.js counter component demo
- **/stencil** - Stencil counter component demo

### Run Individual Components (Standalone)

**Lit Component:**
```bash
npm run dev:lit
```
Visit [http://localhost:5173](http://localhost:5173)

**Stencil Component:**
```bash
npm run dev:stencil
```
Visit [http://localhost:3333](http://localhost:3333)

## Project Structure

```
wc-stress-component/
├── apps/
│   └── nextjs-wc/          # Next.js demo app
│       ├── app/
│       │   ├── page.js     # Home page
│       │   ├── lit/        # Lit component page
│       │   └── stencil/    # Stencil component page
│       └── public/
│           └── components/ # Built components copied here
├── packages/
│   ├── wc-lit/            # Lit.js component
│   │   ├── counter-component.js
│   │   ├── index.html
│   │   └── vite.config.js
│   └── wc-stencil/        # Stencil component
│       ├── src/
│       │   └── components/
│       │       └── counter-component/
│       └── stencil.config.js
└── package.json           # Root workspace config
```

## Common Commands

### Development
```bash
npm run dev              # Start Next.js app
npm run dev:lit          # Start Lit dev server
npm run dev:stencil      # Start Stencil dev server
```

### Building
```bash
npm run build            # Build all workspaces
npm run build:packages   # Build just the components
npm run build:lit        # Build Lit component only
npm run build:stencil    # Build Stencil component only
npm run build:next       # Build Next.js app only
npm run build:all        # Build packages then Next.js
```

### Cleaning
```bash
npm run clean            # Clean all workspaces
npm run clean:packages   # Clean just the component packages
```

## How It Works

### npm Workspaces

This monorepo uses npm workspaces to manage multiple packages:

- **packages/*** - Shared component libraries
- **apps/*** - Applications that consume the components

Dependencies are hoisted to the root `node_modules` when possible, reducing duplication.

### Dynamic Component Loading

The Next.js app loads web components dynamically:

1. **Lit components** - Loaded via script tag injection with import maps for module resolution
2. **Stencil components** - Loaded via the Stencil loader with lazy loading support

### Import Maps

The Next.js app uses import maps to resolve Lit module dependencies:

```javascript
{
  "imports": {
    "lit": "/components/lit/index.js",
    "@lit/reactive-element": "/components/lit/reactive-element.js",
    // ... other mappings
  }
}
```

## Next Steps

- Explore the component source code in `packages/`
- Check out the Next.js integration in `apps/nextjs-wc/`
- Modify the counter components to add new features
- Create additional web components using the same patterns

## Troubleshooting

### Port already in use

If port 3000 is in use, Next.js will automatically try the next available port.

### Components not loading

1. Make sure you've built the packages: `npm run build:packages`
2. Check that files exist in `apps/nextjs-wc/public/components/`
3. Restart the dev server

### Module resolution errors

Clear all build artifacts and reinstall:

```bash
npm run clean
npm install
npm run setup
```

## Learn More

- [Lit Documentation](https://lit.dev)
- [Stencil Documentation](https://stenciljs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [npm Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
