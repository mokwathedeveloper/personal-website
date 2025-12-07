# @repo/ui

Modern, accessible React component library built with TypeScript and Tailwind CSS.

## Components

### Core Components

- **Button** - Primary, secondary, ghost, destructive variants with loading states
- **Card** - Flexible card layouts with header, content, footer
- **Typography** - Heading (1-6), Text, Display, Code components

### Layout

- **Container** - Responsive container with size variants
- **Grid** - CSS Grid with responsive columns
- **Flex** - Flexbox utility with alignment options

### Feedback

- **Badge** - Status indicators with color variants
- **Tag** - Removable tags for filtering
- **Skeleton** - Loading placeholders
- **Avatar** - User avatars with fallback

### Interactive

- **Dialog** - Modal dialogs with backdrop
- **Sheet** - Slide-out panels from any side
- **Tooltip** - Hover tooltips with positioning
- **ThemeToggle** - Dark/light mode switcher

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle } from '@repo/ui';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

## Features

- ✅ TypeScript support
- ✅ Accessible (WCAG 2.1 AA)
- ✅ Dark mode compatible
- ✅ Responsive by default
- ✅ Tree-shakeable
- ✅ Customizable with CSS variables

## Testing

```bash
pnpm test        # Run tests
pnpm test:ui     # Run tests with UI
```
