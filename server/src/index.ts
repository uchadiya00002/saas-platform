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

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.listen(process.env.PORT || 4000, () => {
  console.log("Backend listening on", process.env.PORT || 4000);
});
