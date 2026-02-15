import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // On Vercel, static files are in public/ (express.static is ignored by Vercel,
  // but we need the catch-all for SPA routing). Use cwd for Vercel, __dirname for bundled server.
  const distPath = process.env.VERCEL
    ? path.join(process.cwd(), "public")
    : path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("/{*path}", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
