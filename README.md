# Web Components Stress Component

A monorepo showcasing Lit.js and Stencil web components integrated into a Next.js application with SSR support.

## Project Structure

```
wc-stress-component/
├── packages/
│   ├── wc-lit/              # Lit.js web components
│   │   ├── counter-component.js    # Interactive counter
│   │   └── user-card.js            # Display-only user card
│   └── wc-stencil/          # Stencil web components
│       └── src/components/
│           ├── counter-component/  # Interactive counter
│           └── user-card/          # Display-only user card
├── apps/
│   └── nextjs-wc/           # Next.js demo application
│       ├── app/
│       │   ├── lit/         # Client-side Lit components
│       │   ├── lit-ssr/     # SSR Lit components
│       │   ├── lit-cards/   # Lit user cards demo
│       │   ├── stencil/     # Client-side Stencil components
│       │   ├── stencil-ssr/ # SSR Stencil components
│       │   └── stencil-cards/ # Stencil user cards demo
│       └── public/components/  # Copied components for runtime
└── package.json             # Root workspace configuration
```

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will:
- Install all workspace dependencies
- Automatically copy Lit dependencies to the Next.js public folder

### 2. Build Components

```bash
npm run build:packages
```

This builds both Lit and Stencil components.

### 3. Copy Components to Next.js

```bash
npm run copy:components
```

This copies built components to the Next.js public directory.

### 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the demo.

## All-in-One Setup

For a fresh setup or testing everything works:

```bash
npm run setup
```

This runs: install → build packages → copy components

## Development Workflows

### Standard Development

```bash
# Start dev server (auto-copies components)
npm run dev
```

### Full Test (Build + Dev)

```bash
# Build packages, copy components, and start dev server
npm run test:dev
```

### Individual Component Development

**Lit Component (standalone with Vite):**
```bash
npm run dev:lit
# Visit http://localhost:5173
```

**Stencil Component (standalone):**
```bash
npm run dev:stencil
# Visit http://localhost:3333
```

## Building for Production

### Build Everything

```bash
npm run build:all
```

This runs:
1. Build Lit and Stencil components
2. Copy components to Next.js public folder
3. Build Next.js app for production

### Build Individual Packages

```bash
npm run build:lit      # Build Lit components
npm run build:stencil  # Build Stencil components
npm run build:next     # Build Next.js app only
```

## Available Scripts

### Development
- `npm run dev` - Copy components and start Next.js dev server
- `npm run dev:lit` - Start Lit component dev server (Vite)
- `npm run dev:stencil` - Start Stencil component dev server
- `npm run test:dev` - Build packages, copy, and start dev (full test)

### Building
- `npm run build` - Build all workspaces
- `npm run build:packages` - Build Lit and Stencil components
- `npm run build:lit` - Build Lit components only
- `npm run build:stencil` - Build Stencil components only
- `npm run build:next` - Build Next.js app only
- `npm run build:all` - Build packages → copy → build Next.js

### Component Management
- `npm run copy:components` - Copy built components to Next.js public
- `npm run copy:lit` - Copy Lit components only
- `npm run copy:stencil` - Copy Stencil dist and loader
- `npm run copy:deps` - Copy Lit dependencies to Next.js public
- `npm run copy:lit-deps` - Copy lit, @lit, lit-html, lit-element

### Cleanup
- `npm run clean` - Clean all build artifacts and node_modules
- `npm run clean:packages` - Clean package workspaces only
- `npm run clean:next` - Clean Next.js .next and out directories
- `npm run clean:components` - Remove copied components from public

### Setup
- `npm run setup` - Complete setup: install → build → copy
- `npm run postinstall` - Auto-run after install (copies dependencies)
- `npm run prebuild` - Auto-run before build (builds and copies components)

## Demo Pages

The Next.js app includes multiple demo pages:

### Home Page
- **[/](http://localhost:3000)** - Overview with links to all demos

### Counter Components (Interactive)
- **[/lit](http://localhost:3000/lit)** - Lit counter (Client-side)
- **[/lit-ssr](http://localhost:3000/lit-ssr)** - Lit counter (SSR with progressive hydration)
- **[/stencil](http://localhost:3000/stencil)** - Stencil counter (Client-side)
- **[/stencil-ssr](http://localhost:3000/stencil-ssr)** - Stencil counter (SSR with progressive hydration)

### User Card Components (Read-only Props)
- **[/lit-cards](http://localhost:3000/lit-cards)** - Lit user cards
- **[/stencil-cards](http://localhost:3000/stencil-cards)** - Stencil user cards

## Components

### Counter Component (Interactive)

**Features:**
- Increment/Decrement buttons
- Reset functionality
- Reactive state management
- Gradient styling

**Props:** None (stateful component)

**Usage:**
```html
<counter-component></counter-component>
```

### User Card Component (Display-only)

**Features:**
- User avatar with initials
- Name, email, and role display
- Read-only props
- Gradient card design

**Props:**
- `name` - User's full name
- `email` - User's email address
- `role` - User's role/title
- `avatar` - Optional avatar image URL

**Usage:**
```html
<user-card
  name="Alice Johnson"
  email="alice@example.com"
  role="Frontend Developer"
></user-card>
```

## Package Details

### wc-lit

Lit.js components with:
- ✅ Reactive state management
- ✅ Shadow DOM encapsulation
- ✅ Scoped CSS styles
- ✅ Event handling
- ✅ Lightweight and fast
- ✅ JavaScript (no TypeScript)

**Build Output:** ES modules in root directory

### wc-stencil

Stencil components with:
- ✅ TypeScript support
- ✅ JSX syntax
- ✅ Virtual DOM
- ✅ Lazy loading
- ✅ Compiler-optimized
- ✅ Built-in hydration support

**Build Output:** `dist/` and `loader/` directories

### nextjs-wc

Next.js 16 application with:
- ✅ Dynamic web component loading
- ✅ Import maps for module resolution
- ✅ SSR with progressive hydration
- ✅ Client-side and server-side rendering demos
- ✅ Tailwind CSS styling
- ✅ Turbopack for fast builds
- ✅ Component wrapper for SSR

## SSR Implementation

The SSR pages use a **progressive hydration** strategy:

1. **Server renders a placeholder** that matches the component's visual design
2. **Client loads the web component** via script tag injection
3. **Component hydrates** and replaces the placeholder
4. **Smooth transition** with opacity animation

See [apps/nextjs-wc/SSR-APPROACH.md](apps/nextjs-wc/SSR-APPROACH.md) for detailed documentation.

## Technologies

- **Lit.js 3.x** - Simple library for fast web components
- **Stencil 4.x** - Web component compiler with TypeScript
- **Next.js 16.x** - React framework with Turbopack
- **Vite** - Build tool for Lit components
- **Tailwind CSS** - Utility-first CSS framework
- **npm Workspaces** - Monorepo management

## Important Notes

### Component Updates

After modifying components in `packages/`, you must:

1. **Rebuild the package:**
   ```bash
   npm run build:packages
   ```

2. **Copy to Next.js:**
   ```bash
   npm run copy:components
   ```

Or use the combined command:
```bash
npm run test:dev
```

### Git Workflow

The project uses a single root git repository. Components in `public/components/` are tracked to ensure the app works after cloning.

**What's tracked:**
- Source files in `packages/`
- Built components in `apps/nextjs-wc/public/components/`
- Configuration files

**What's ignored:**
- `node_modules/`
- `.next/`, `dist/`, `out/`, `www/`
- Build artifacts in packages

## Troubleshooting

### Components not loading in Next.js

1. Ensure components are built:
   ```bash
   npm run build:packages
   ```

2. Ensure components are copied:
   ```bash
   npm run copy:components
   ```

3. Check the browser console for errors

### Module resolution errors

If you see "Failed to resolve module specifier" errors:

1. Ensure Lit dependencies are copied:
   ```bash
   npm run copy:deps
   ```

2. Check import map in `apps/nextjs-wc/app/layout.js`

### Stencil loader 404 errors

Ensure the `dist` directory is copied:
```bash
npm run copy:stencil
```

## License

MIT
