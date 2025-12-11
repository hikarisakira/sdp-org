import type { Collection } from "tinacms";

export const CarouselCollection: Collection = {
  name: "carousel",
  label: "首頁輪播區塊",
  path: "src/content/carousel",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "頁面主旨",
      required: true,
    },
    {
      type: "object",
      name: "blocks",
      label: "區塊(沒有意外的話這個分類只有這一個區塊)",
      list: true,
      templates: [
        {
          name: "heroCarousel",
          label: "首頁輪播區塊",
          fields: [
            {
              type: "boolean",
              name: "fullscreen",
              label: "全螢幕(如果沒有什麼需要的話不要碰這個按鈕)",
              description: "Make carousel fill entire viewport",
              ui: {
                defaultValue: true,
              },
            },
            {
              type: "boolean",
              name: "autoplay",
              label: "自動輪播",
              ui: {
                defaultValue: true,
              },
            },
            {
              type: "number",
              name: "delay",
              label: "延遲時間(單位為ms)",
              ui: {
                defaultValue: 5000,
              },
            },
            {
              type: "object",
              name: "slides",
              label: "輪播內容",
              list: true,
              ui: {
                itemProps: (item) => ({
                  label: item?.title || "Slide",
                }),
              },
              fields: [
                {
                  type: "image",
                  name: "image",
                  label: "圖片，請切成正方形，512*512px為佳",
                  required: true,
                },
                {
                  type: "string",
                  name: "title",
                  label: "主旨",
                  required: true,
                },
                {
                  type: "string",
                  name: "subtitle",
                  label: "簡述(不建議打太長，長話短說就好)",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "boolean",
                  name: "showButton",
                  label: "要有按鈕嗎？(若無下面按鈕內文字可留空)",
                  ui: {
                    defaultValue: false,
                  },
                },
                {
                  type: "string",
                  name: "buttonText",
                  label: "按鈕內文字",
                },
                {
                  type: "string",
                  name: "buttonLink",
                  label: "按鈕連結(URL)",
                },
                {
                  type: "string",
                  name: "textColor",
                  label: "文字顏色",
                  ui: {
                    component: "color",
                    defaultValue: "#ffffff",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
