# SaaS Platform - Backend

This is the backend API server for the SaaS Platform, built with Node.js, Express, TypeScript, and PostgreSQL.

## 🚀 Features

- RESTful API endpoints
- JWT-based authentication
- Role-based access control
- Subscription management
- Database management with Prisma
- Request validation
- Error handling
- Rate limiting
- CORS support
- Environment-based configuration

## 🛠 Tech Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Framework**: Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Validation**: Zod
- **Testing**: Jest, Supertest
- **Containerization**: Docker

## 📦 Prerequisites

- Node.js 18+
- PostgreSQL 15+
- pnpm (recommended) or npm
- Docker (optional, for containerized development)

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Update the environment variables in `.env` with your configuration.

3. **Set up the database**

   ```bash
   # Start PostgreSQL and Redis using Docker
   docker compose up -d postgres redis

   # Run database migrations
   npx prisma migrate dev

   # Seed the database with initial data
   npx ts-node prisma/seed.ts
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

   The API will be available at http://localhost:4000

5. **Build for production**
   ```bash
   pnpm build
   pnpm start
   ```

## 🏗 Project Structure

```
server/
├── prisma/
│   ├── migrations/    # Database migrations
│   ├── schema.prisma  # Database schema
│   └── seed.ts        # Database seeder
├── src/
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Express middleware
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── services/     # Business logic
│   ├── types/        # TypeScript type definitions
│   ├── utils/        # Utility functions
│   ├── app.ts        # Express application setup
│   └── server.ts     # Server entry point
├── .env.example      # Example environment variables
└── package.json      # Project configuration
```

## 📚 API Documentation

API documentation is available at `/api-docs` when running in development mode.

## 🧪 Testing

Run unit tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Run tests with coverage:

```bash
pnpm test:coverage
```

## 🐳 Docker

Build the Docker image:

```bash
docker build -t saas-platform-server .
```

Run the container:

```bash
docker run -p 4000:4000 saas-platform-server
```

## 🔄 Database Migrations

Create a new migration:

```bash
npx prisma migrate dev --name your_migration_name
```

Apply pending migrations:

```bash
npx prisma migrate deploy
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🤝 Contributing

Please read [CONTRIBUTING.md](../CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.
