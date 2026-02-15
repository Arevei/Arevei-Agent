import { createApp } from "./app";

// Traditional deployment: start the server
createApp().then(async (app) => {
  const port = parseInt(process.env.PORT || "5000", 10);
  app.listen(port, "0.0.0.0", () => {
    const { log } = await import("./app");
    log(`serving on port ${port}`);
  });
});
