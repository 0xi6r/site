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
  port: Number(process.env.PORT ?? 3000),

  routes: {
    ...Object.fromEntries(
      Object.entries(publicFiles).map(([path, file]) => [path, Bun.file(file)])
    ),

    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Server running at ${server.url}`);
