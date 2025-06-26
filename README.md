# Svelte + Storybook + Tailwind CSS v4 Monorepo

A modern monorepo setup using pnpm workspaces with Svelte, Storybook, and Tailwind CSS v4.

## Structure

```
svelte-storybook-tailwind-monorepo/
├── apps/
│   ├── main-app/          # SvelteKit application
│   └── storybook/         # Storybook application  
└── packages/
    ├── ui/                # Svelte component library
    └── tailwind-theme/    # Custom Tailwind v4 theme package
```

## Key Features

### Tailwind CSS v4 Theme Package

The `@some-org/tailwind-theme` package provides:
- **Centralized design tokens** (colors, spacing, fonts, etc.)
- **Shared theme variables** across all apps and packages
- **Automated source scanning** for component classes

### How It Works

1. **Theme Package** (`packages/tailwind-theme/`):
   - Contains `@theme` directive with custom CSS variables
   - Centralized `@source` scanning for all UI packages
   - Exports theme.css for import by other packages

2. **Component Library** (`packages/ui/`):
   - Uses theme variables in components (e.g., `bg-brand-600`)
   - Imports theme package for consistent styling

3. **Applications** (`apps/main-app/`, `apps/storybook/`):
   - Import theme package CSS
   - Automatically get all component styles via source scanning

## Getting Started

```bash
# Install dependencies
pnpm install

# Start main app
pnpm run dev:main-app

# Start Storybook
pnpm run dev:storybook

# Build all packages
pnpm run build:packages
```

## Tailwind v4 Configuration

### Theme Package (`packages/tailwind-theme/src/theme.css`)

```css
@theme {
  /* Custom colors */
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  /* ... more variables */
}

/* Centralized source scanning */
@source '../../*/src/**/*.{svelte,js,ts}';
```

### App CSS (`apps/main-app/src/app.css`)

```css
@import 'tailwindcss';
@import '@some-org/tailwind-theme/theme.css';

@plugin '@tailwindcss/forms';
@plugin '@tailwindcss/typography';
```

## Key Solutions Implemented

### Problem: Tailwind v4 `@theme` directive doesn't work from imported packages
**Solution**: Import the theme CSS directly, not as a JavaScript plugin

### Problem: Component classes not being generated
**Solution**: Use `@source` directive with correct relative paths to scan UI packages

### Problem: Managing source paths across multiple packages  
**Solution**: Centralize all `@source` directives in the theme package using glob patterns

## Adding New UI Packages

The current setup automatically scans all packages matching `packages/*/src/**/*.{svelte,js,ts}`.

To add a new UI package:
1. Create `packages/your-ui-package/`
2. Import the theme: `@import '@some-org/tailwind-theme/theme.css';`
3. Use theme variables in components: `bg-brand-500`, `text-brand-900`, etc.

No additional configuration needed!

## Scripts

- `pnpm run dev:main-app` - Start main application
- `pnpm run dev:storybook` - Start Storybook
- `pnpm run build:main-app` - Build main application  
- `pnpm run build:storybook` - Build Storybook
- `pnpm run build:packages` - Build all packages
- `pnpm run lint` - Lint all packages
- `pnpm run format` - Format all packages

## Tech Stack

- **Monorepo**: pnpm workspaces
- **Framework**: SvelteKit
- **Styling**: Tailwind CSS v4
- **Components**: Custom Svelte component library
- **Documentation**: Storybook
- **Language**: TypeScript