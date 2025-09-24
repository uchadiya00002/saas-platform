import express, { type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';

dotenv.config();

const prisma = new PrismaClient({
  log: ['error', 'warn'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null;

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

// Health endpoint
app.get('/api/health', async (_req: Request, res: Response) => {
  try {
    // Test Postgres
    await prisma.$queryRaw`SELECT 1`;

    // Test Redis if configured
    let redisStatus = 'not configured';
    if (redis) {
      await redis.set('healthcheck', 'ok');
      const redisCheck = await redis.get('healthcheck');
      redisStatus = redisCheck === 'ok' ? 'connected' : 'error';
    }

    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      services: {
        database: 'connected',
        redis: redisStatus,
      },
    });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Example API
app.get('/api/users', async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch users',
    });
  }
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { error: err.message }),
  });
});

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Not Found',
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle graceful shutdown
const shutdown = async () => {
  console.log('Shutting down server...');

  // Close Redis connection if it exists
  if (redis) {
    await redis.quit();
  }

  // Close Prisma connection
  await prisma.$disconnect();

  // Close HTTP server
  server.close(() => {
    console.log('Server has been shut down');
    process.exit(0);
  });
};

// Handle process termination
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

export { app };
