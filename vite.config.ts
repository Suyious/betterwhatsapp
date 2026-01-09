import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        content: resolve(__dirname, "src/content/index.ts"),
        background: resolve(__dirname, "src/background/service-worker.ts")
      },
      output: {
        entryFileNames: "[name]/[name].js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: "[name].[ext]"
      }
    }
  },
  plugins: [
	  {
		  name: "copy-manifest",
		  writeBundle() {
			  fs.copyFileSync(
				  resolve(__dirname, "src/manifest.json"),
				  resolve(__dirname, "dist/manifest.json")
			  );
			  fs.cpSync(
				  resolve(__dirname, "src/styles"),
				  resolve(__dirname, "dist/styles"),
				  { recursive: true }
			  );
		  }
	  }
  ]
});
