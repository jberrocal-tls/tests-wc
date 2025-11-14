# Web Components Stress Component

A monorepo showcasing Lit.js and Stencil web components integrated into a Next.js application.

## Project Structure

```
wc-stress-component/
├── packages/
│   ├── wc-lit/         # Lit.js counter component
│   └── wc-stencil/     # Stencil counter component
├── apps/
│   └── nextjs-wc/      # Next.js demo application
└── package.json        # Root workspace configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v7 or higher for workspace support)

### Installation

Install all dependencies from the root:

```bash
npm install
```

This will install dependencies for all workspaces (packages and apps).

## Development

### Run the Next.js App

Start the Next.js development server (includes both web components):

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the demo.

### Run Individual Components

**Lit Component (standalone):**
```bash
npm run dev:lit
```

**Stencil Component (standalone):**
```bash
npm run dev:stencil
```

## Building

### Build All Packages

```bash
npm run build
```

### Build Individual Packages

```bash
npm run build:lit      # Build Lit component
npm run build:stencil  # Build Stencil component
npm run build:next     # Build Next.js app
```

## Available Scripts

- `npm run dev` - Start Next.js dev server
- `npm run dev:lit` - Start Lit component dev server
- `npm run dev:stencil` - Start Stencil component dev server
- `npm run build` - Build all packages
- `npm run build:lit` - Build Lit component only
- `npm run build:stencil` - Build Stencil component only
- `npm run build:next` - Build Next.js app only
- `npm run clean` - Clean all build artifacts and node_modules

## Packages

### wc-lit

Lit.js counter component with:
- Reactive state management
- Shadow DOM encapsulation
- Scoped CSS styles
- Event handling

### wc-stencil

Stencil counter component with:
- TypeScript support
- JSX syntax
- Virtual DOM
- Lazy loading

### nextjs-wc

Next.js application demonstrating:
- Dynamic web component loading
- Import maps for module resolution
- Tailwind CSS styling
- Client-side component hydration

## Technologies

- **Lit.js** - Simple library for fast web components
- **Stencil** - Web component compiler
- **Next.js** - React framework
- **Vite** - Build tool for Lit
- **Tailwind CSS** - Utility-first CSS framework
- **npm Workspaces** - Monorepo management

## License

MIT
