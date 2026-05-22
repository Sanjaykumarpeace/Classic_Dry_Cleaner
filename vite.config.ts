// @lovable.dev/vite-tanstack-config already includes the core TanStack/Vite plugins.
// Keep only deployment-specific additions here.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// Nitro adapts the TanStack Start server output for Vercel deployment.
export default defineConfig({
  cloudflare: false,
  plugins: [nitro()],
  tanstackStart: {
    server: { entry: "server" },
  },
});
