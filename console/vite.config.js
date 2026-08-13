import { fileURLToPath, URL } from "node:url";
import { viteConfig } from "@halo-dev/ui-plugin-bundler-kit";

const OUT_DIR_PROD = "../src/main/resources/console";
const OUT_DIR_DEV = "../build/resources/main/console";

export default viteConfig({
  vite: ({ mode }) => ({
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: mode === "production" ? OUT_DIR_PROD : OUT_DIR_DEV,
    },
  }),
});
