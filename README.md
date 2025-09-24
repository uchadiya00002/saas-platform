# SaaS Platform

A modern SaaS platform built with Node.js, TypeScript, React, PostgreSQL, and Docker.

## 🚀 Features

- **Database Management**: Prisma Studio for easy database management
- User authentication and authorization
- Subscription management
- Role-based access control
- RESTful API backend
- Modern React frontend
- Dockerized development environment
- PostgreSQL database with Prisma ORM
- Redis for caching and session management

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Caching**: Redis
- **Containerization**: Docker

## 📦 Prerequisites

- Node.js 18+
- Docker & Docker Compose

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
   # Install dependencies
   npm install
   
   # Start database and services
   docker compose up -d
   
   # Run database migrations
   cd server
   npx prisma migrate dev
   
   # Start both client and server in development mode
   cd ..
   npm run dev
   ```
   
4. **Access Prisma Studio (Optional)**
   ```bash
   cd server
   npm run prisma:studio
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - API Server: http://localhost:5001
   - Prisma Studio: http://localhost:5555
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
