import { defineConfig } from "tinacms";
import { NewsCollection } from "./collections/news"; // 改為 news
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";
import { CarouselCollection } from "./collections/carousel";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      NewsCollection, // 改為 NewsCollection
      PageCollection,
      GlobalConfigCollection,
      CarouselCollection,
    ],
  },
});
