import { defineConfig } from "astro/config"
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind"
import awsAmplify from 'astro-aws-amplify';

export default defineConfig({
  integrations: [
    tailwind(),
    icon()
  ],
  output: "server",
  adapter: awsAmplify(),
})

