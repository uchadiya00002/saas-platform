import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config();

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL }));

app.get("/api/health", async (_req, res) => {
  try {
    // Test the database connection
    await prisma.$queryRaw`SELECT 1`;
    res.json({ 
      status: 'ok',
      database: 'connected'
    });
  } catch (error: unknown) {
    console.error('Database connection error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ 
      status: 'error',
      database: 'connection failed',
      error: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal server error'
    });
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Backend listening on", process.env.PORT || 4000);
});
