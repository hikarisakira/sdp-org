interface SiteConfig {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogLocale: string;
  shareMessage: string;
}

export const siteConfig: SiteConfig = {
  author: "DanielCG",
  title: "Astro Theme OpenBlog",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  lang: "zh_TW",
  ogLocale: "zh-TW",
  shareMessage: "分享貼文", // Message to share a post on social media
};
