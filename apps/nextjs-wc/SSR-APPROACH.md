# Server-Side Rendering (SSR) for Web Components

This document explains the SSR implementation for Lit and Stencil web components in Next.js.

## Overview

Web components present unique challenges for SSR because they:
- Rely on browser APIs (Shadow DOM, Custom Elements)
- Execute JavaScript on the client
- May not render properly on the server

## Our Approach

We've implemented a **progressive hydration** strategy:

### 1. Server-Side Placeholder

The server renders a **placeholder** that looks similar to the actual component:
- Matches the visual design
- Shows initial state (count: 0)
- Provides instant visual feedback
- Prevents layout shift

### 2. Client-Side Hydration

After the page loads:
- Web component scripts are dynamically imported
- Custom elements are defined
- Components replace the placeholders
- Full interactivity is enabled

## Implementation Details

### Lit Component (`/lit-ssr`)

**File:** `app/components/LitCounter.js`

```javascript
'use client';

export default function LitCounter() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Load Lit component dynamically
    import('/components/counter-lit.js').then(() => {
      setIsHydrated(true);
    });
  }, []);

  return (
    <div>
      {/* Server-rendered placeholder */}
      {!isHydrated && <PlaceholderCounter />}

      {/* Actual component after hydration */}
      <counter-component style={{ display: isHydrated ? 'block' : 'none' }} />
    </div>
  );
}
```

**How it works:**
1. Server renders the placeholder (visible immediately)
2. Client loads the Lit component script
3. Component hydrates and replaces placeholder
4. Smooth transition with opacity animation

### Stencil Component (`/stencil-ssr`)

**File:** `app/components/StencilCounter.js`

Similar approach but uses Stencil's loader:

```javascript
const module = await import('/components/loader/index.js');
module.defineCustomElements(window);
```

**Important Setup:**
The Stencil loader requires the `dist` directory to be available in `public/components/`:
- Copy `packages/wc-stencil/dist` → `apps/nextjs-wc/public/components/dist`
- The loader references files from `../dist/esm/loader.js`
- All ESM modules and component bundles must be accessible

**Stencil Advantages:**
- Built-in hydration support
- Lazy loading by default
- Better SSR compatibility

## Benefits

### ✅ Improved Performance
- Faster First Contentful Paint (FCP)
- Reduced Cumulative Layout Shift (CLS)
- Progressive enhancement

### ✅ Better User Experience
- Instant visual feedback
- No blank screen during load
- Smooth transitions

### ✅ SEO Friendly
- Server-rendered HTML
- Content visible to crawlers
- Proper meta tags

## Limitations

### 🚫 No True SSR
- Components don't execute on server
- Placeholders are static HTML
- Initial state only

### 🚫 Hydration Overhead
- Additional JavaScript required
- Two rendering passes
- Slight complexity increase

## Alternative Approaches

### Declarative Shadow DOM (DSD)

For true SSR, you could use Declarative Shadow DOM:

```html
<counter-component>
  <template shadowroot="open">
    <style>/* styles */</style>
    <div>/* component markup */</div>
  </template>
</counter-component>
```

**Pros:**
- True server-side rendering
- Shadow DOM on first paint
- No hydration flash

**Cons:**
- Browser support limited
- Complex implementation
- Requires build tooling

### Static Site Generation (SSG)

Pre-render pages at build time:

```javascript
export async function generateStaticParams() {
  return [/* routes */];
}
```

**Best for:**
- Content-heavy pages
- Infrequently changing data
- Maximum performance

## Comparison: CSR vs SSR

| Aspect | Client-Side (`/lit`, `/stencil`) | Server-Side (`/lit-ssr`, `/stencil-ssr`) |
|--------|----------------------------------|-------------------------------------------|
| **Initial Paint** | Blank until JS loads | Placeholder visible immediately |
| **Hydration** | Single pass | Two-pass (placeholder → component) |
| **SEO** | JavaScript required | HTML content available |
| **Complexity** | Simple | Moderate |
| **Performance** | Good | Better FCP, similar TTI |

## Testing the Implementation

### 1. Visual Comparison

Visit both versions and compare:
- `/lit` (client-side)
- `/lit-ssr` (server-side with placeholder)

### 2. Network Throttling

Test with slow 3G to see the difference:
1. Open DevTools → Network
2. Throttle to "Slow 3G"
3. Reload pages
4. Notice SSR shows content faster

### 3. Disable JavaScript

1. Open DevTools → Settings → Debugger
2. Disable JavaScript
3. Reload `/lit-ssr`
4. See placeholder (better than blank screen)

## Future Improvements

### 1. Streaming SSR
Use React Server Components for progressive streaming:
```javascript
import { Suspense } from 'react';

<Suspense fallback={<Skeleton />}>
  <CounterComponent />
</Suspense>
```

### 2. Hydration Optimization
- Use `useTransition` for smoother updates
- Implement intersection observer for lazy hydration
- Add error boundaries for failed hydration

### 3. Better Placeholders
- Match exact dimensions
- Include loading animations
- Progressive enhancement with CSS

## Resources

- [Declarative Shadow DOM](https://web.dev/declarative-shadow-dom/)
- [Stencil Hydrate App](https://stenciljs.com/docs/hydrate-app)
- [Lit SSR](https://lit.dev/docs/ssr/overview/)
- [Next.js Rendering](https://nextjs.org/docs/app/building-your-application/rendering)

## Conclusion

Our SSR implementation provides:
- ✅ Better perceived performance
- ✅ SEO-friendly content
- ✅ Graceful degradation
- ✅ Progressive enhancement

While not "true" SSR, this approach offers significant benefits for web component-based applications in Next.js.
