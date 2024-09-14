import adapter from "@sveltejs/adapter-auto";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({ typescript: true, scss: true }),

  kit: {
    adapter: adapter(),
    alias: {
      $components: "./src/components",
      $lib: "./src/lib",
      $stores: "./src/stores"
    }
  }
};

export default config;
