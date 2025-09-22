# SaaS Platform - Frontend

This is the frontend application for the SaaS Platform, built with React, TypeScript, and Vite.

## 🚀 Features

- Modern React with TypeScript
- Vite for fast development and building
- Responsive design with Tailwind CSS
- State management with React Query
- Form handling with React Hook Form
- Authentication flow
- Subscription management
- Dark mode support

## 🛠 Tech Stack

- **Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Form Handling**: React Hook Form
- **Routing**: React Router
- **HTTP Client**: Axios
- **Testing**: Vitest, React Testing Library

## 📦 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update the environment variables in `.env` as needed.

3. **Start the development server**
   ```bash
   pnpm dev
   ```
   The application will be available at http://localhost:5173

4. **Build for production**
   ```bash
   pnpm build
   ```
   The production build will be available in the `dist` directory.

## 🏗 Project Structure

```
client/
├── public/              # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   ├── features/       # Feature-based modules
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Layout components
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── stores/         # State management
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Application entry point
├── .env.example        # Example environment variables
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## 🧪 Testing

Run unit tests:
```bash
pnpm test
```

Run tests in watch mode:
```bash
pnpm test:watch
```

## 🐳 Docker

Build the Docker image:
```bash
docker build -t saas-platform-client .
```

Run the container:
```bash
docker run -p 80:80 saas-platform-client
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
