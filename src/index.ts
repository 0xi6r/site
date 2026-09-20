import { serve } from "bun";
import index from "./index.html";

const publicFiles = {
  "/logo.jpeg": "public/logo.jpeg",
  "/images/after.jpg": "public/images/after.jpg",
  "/images/before.jpg": "public/images/before.jpg",
  "/images/lovely.jpeg": "public/images/lovely.jpeg",
  "/images/nice-spacing.jpeg": "public/images/nice-spacing.jpeg",
  "/images/siaya.jpeg": "public/images/siaya.jpeg",
  "/images/stone.jpeg": "public/images/stone.jpeg",
  "/images/white-tiles.jpeg": "public/images/white-tiles.jpeg",
  "/images/yellow.jpeg": "public/images/yellow.jpeg",
};

const server = serve({
  routes: {
    ...Object.fromEntries(
      Object.entries(publicFiles).map(([path, file]) => [path, Bun.file(file)])
    ),

    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
