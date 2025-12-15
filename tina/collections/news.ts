import type { Collection } from "tinacms";
import { CATEGORIES } from "@/data/categories";

export const NewsCollection: Collection = {
  name: "news",
  label: "最新消息",
  path: "src/content/news",
  format: "mdx",
  ui: {
    router({ document }) {
      const filename = document._sys.filename.replace(/\.mdx?$/, "");
      return `/news/${filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "文章標題",
      isTitle: true,
      required: true,
    },
    {
      name: "description",
      label: "文章簡述",
      type: "string",
    },
    {
      name: "pubDate",
      label: "發布日期",
      type: "datetime",
    },
    {
      name: "heroImage",
      label: "標題圖片",
      type: "image",
    },
    {
      type: "string",
      required: true,
      name: "category",
      label: "文章分類",
      description: "選擇此文章所屬的分類 *重要，必須選取*",
      options: [...CATEGORIES],
    },
    {
      name: "tags",
      label: "文章標籤分類",
      type: "string",
      list: true,
      ui: {
        component: "tags",
        description: "在此處添加標籤以分類文章類別",
      },
      options: [
        { value: "press", label: "新聞稿" },
        { value: "events", label: "活動資訊" },
        { value: "issues", label: "議題發言" },
        { value: "clarification", label: "闢謠專區" },
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "文章內容",
      isBody: true,
    },
  ],
};
