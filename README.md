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

/* Exclude test and config files for better performance */
@source not '../../*/src/**/*.test.{js,ts}';
@source not '../../*/src/**/*.spec.{js,ts}';
@source not '../../*/src/**/*.config.{js,ts}';
@source not '../../*/src/**/*.d.ts';
```

### App CSS (`apps/main-app/src/app.css`)

```css
@import "tailwindcss";
@import "@some-org/tailwind-theme/theme.css";

@plugin '@tailwindcss/forms';
@plugin '@tailwindcss/typography';
```

## Tailwind v4 Deep Dive & Best Practices

### Critical Understanding: How @source Works

**The Problem**: Utility classes work fine when used directly (`<div class="bg-brand-500">`), but components from UI packages don't get theme styles applied.

**The Root Cause**: Without `@source`, Tailwind only scans the current app's files. It never discovers classes used in your UI package components, so those utility classes are never generated.

**The Solution**: The `@source` directive tells Tailwind to scan additional file paths for class names.

### @source Performance Research

#### ✅ **Include JS/TS Files - Here's Why:**

- **Component Logic**: Your Button components define classes in TypeScript/JavaScript:
  ```typescript
  const variantClasses = {
  	primary: "bg-brand-600 text-white hover:bg-brand-700",
  };
  ```
- **Plain Text Scanning**: Tailwind treats all files as plain text - no code parsing overhead
- **Minimal Performance Cost**: Built-in optimizations handle binary exclusion and smart filtering

#### 🚀 **Performance Optimizations Applied:**

```css
/* Include all component files */
@source '../../*/src/**/*.{svelte,js,ts}';

/* Exclude non-component files for better performance */
@source not '../../*/src/**/*.test.{js,ts}';
@source not '../../*/src/**/*.spec.{js,ts}';
@source not '../../*/src/**/*.config.{js,ts}';
@source not '../../*/src/**/*.d.ts';
```

**Benefits:**

- ✅ Faster builds by excluding test/config files
- ✅ Reduced file system traversal
- ✅ Same utility class coverage
- ✅ No impact on functionality

#### 📊 **Computational Cost Analysis:**

- **Low Impact**: Text scanning is very fast (simple string matching)
- **Built-in Optimizations**: Automatic binary file exclusion, .gitignore respect
- **v4 Performance**: Significantly faster than v3 for full builds
- **Smart Exclusions**: Heuristic filtering reduces unnecessary file scanning

## Key Solutions Implemented

### Problem: Tailwind v4 `@theme` directive doesn't work from imported packages

**Solution**: Import the theme CSS directly, not as a JavaScript plugin

### Problem: Component classes not being generated

**Solution**: Use `@source` directive with correct relative paths to scan UI packages

### Problem: Managing source paths across multiple packages

**Solution**: Centralize all `@source` directives in the theme package using glob patterns

### Problem: Build performance with large monorepos

**Solution**: Use `@source not` to exclude test files, config files, and type definitions

## Adding New UI Packages

The current setup automatically scans all packages matching `packages/*/src/**/*.{svelte,js,ts}`.

To add a new UI package:

1. Create `packages/your-ui-package/`
2. Import the theme: `@import '@some-org/tailwind-theme/theme.css';`
3. Use theme variables in components: `bg-brand-500`, `text-brand-900`, etc.

No additional configuration needed!

## Troubleshooting

### Component Styles Not Applying

**Issue**: Utility classes like `bg-brand-500` work directly but UI package components have no styles.

**Diagnosis**:

```bash
# Check if @source directive is present
grep -r "@source" packages/tailwind-theme/src/

# Verify CSS generation
pnpm run build:packages
# Look for your component classes in the generated CSS
```

**Solution**: Ensure `@source` directive includes your UI package paths.

### Build Performance Issues

**Issue**: Tailwind builds are slow in large monorepos.

**Solution**: Add exclusions for non-component files:

```css
@source not '../../*/src/**/*.test.{js,ts}';
@source not '../../*/src/**/*.config.{js,ts}';
@source not '../../*/src/**/*.d.ts';
```

### Classes Missing After Build

**Issue**: Some utility classes disappear after production builds.

**Common Causes**:

1. **Dynamic class construction**: `bg-${color}-500` won't work
2. **Missing @source paths**: Component files not being scanned
3. **Typos in class names**: Tailwind only generates detected classes

**Solution**: Use complete class names and verify @source coverage.

### Migration from v3 to v4

**Key Changes**:

- Replace `tailwind.config.js` with CSS `@theme` directive
- Use `@source` instead of `content` array
- Import theme CSS, don't use as JS plugin
- Update class detection patterns for dynamic components

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
