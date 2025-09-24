# SaaS Platform

A modern SaaS platform built with Node.js, TypeScript, React, PostgreSQL, and Docker.

## 🚀 Features

- User authentication and authorization
- Subscription management
- Role-based access control
- RESTful API backend
- Modern React frontend
- Dockerized development and production environments
- PostgreSQL database with Prisma ORM
- Redis for caching

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Caching**: Redis
- **Containerization**: Docker
- **CI/CD**: GitHub Actions (TBD)

## 📦 Prerequisites

- Node.js 18+
- Docker & Docker Compose
- pnpm (recommended) or npm

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/saas-platform.git
   cd saas-platform
   ```

2. **Set up environment variables**
   - Copy `.env.example` to `.env` in both `client` and `server` directories
   - Update the environment variables as needed

3. **Start the development environment**
   ```bash
   # Start database and services
   docker compose up -d
   
   # Install server dependencies
   cd server
   pnpm install
   
   # Run database migrations
   npx prisma migrate dev
   
   # Start the server in development mode
   pnpm dev
   
   # In a new terminal, start the client
   cd ../client
   pnpm install
   pnpm dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - API Server: http://localhost:5000
   - PostgreSQL: localhost:5432
   - Redis: localhost:6379

## 🏗 Project Structure

```
saas-platform/
├── client/               # Frontend application
├── server/               # Backend API server
│   ├── prisma/          # Database schema and migrations
│   ├── src/             # Source code
│   └── Dockerfile       # Production Dockerfile
├── docker-compose.yml   # Development environment
└── README.md           # This file
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.
