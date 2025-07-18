import { resolve } from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["**/*.test.@(js|jsx|mjs|ts|tsx)", "**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    }),
    tsConfigPaths({
      projects: ["./tsconfig.app.json"],
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/styles/tokens.css",
          dest: "./styles",
        },
      ],
    }),
    tailwindcss(),
  ],
});
