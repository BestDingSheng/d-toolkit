# Deson

A modern React component library with TypeScript support.

## Features

- 🚀 **Modern Stack**: Built with React + TypeScript
- 📦 **Component Library**: Includes various reusable components
- 🎨 **Customizable**: Easy to customize with styled-components
- 📱 **Responsive**: Mobile-friendly components
- 📖 **Documentation**: Powered by dumi
- 🔧 **Development Tools**: ESLint, Prettier, and Husky for code quality

## Components

### CustomPreview
An advanced image preview component with the following features:
- Image rotation and zoom
- Thumbnail navigation
- OCR support with region selection
- Keyboard shortcuts support
- Responsive layout
- Custom pagination support

### ButtonExt
Extended button component with additional features.

### SelectExt
Enhanced select component with extended functionality.

## Utils

A collection of utility functions for common operations:

- Array operations (flatten, unique, groupBy)
- Object manipulations
- String utilities

## Getting Started

### Installation

```bash
pnpm install deson
```

### Usage

```tsx
import { CustomPreview, ButtonExt, SelectExt } from '@deson/components';
import { flatten, unique, groupBy } from '@deson/utils';
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

## Project Structure

```
deson/
├── packages/
│   ├── components/     # React components
│   └── utils/          # Utility functions
├── docs/              # Documentation
├── .eslintrc.js      # ESLint configuration
├── .prettierrc       # Prettier configuration
└── tsconfig.json     # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License 