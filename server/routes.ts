import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Test route to verify DB connection
  app.post("/api/test-db", async (req, res) => {
    try {
      const testUser = await storage.createUser({
        username: `test_${Date.now()}`,
        password: "test123",
      });
      res.json({ success: true, user: testUser });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  return httpServer;
}
