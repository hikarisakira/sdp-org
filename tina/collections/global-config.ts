import type { Collection } from "tinacms";
import IconComponent from "../components/IconComponent";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "seo",
      label: "General site config",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Site title for SEO",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "Site description for SEO",
          type: "string",
          required: true,
        },
        {
          name: "siteOwner",
          label: "Your Name, Company Name (Used in the footer)",
          required: true,
          type: "string",
          ui: {
            defaultValue: "Your name here",
          },
        },
      ],
    },

    // 🆕 導航選單 - 支援多層級和次要按鈕
    {
      name: "nav",
      label: "導航選單 (可新增、刪除、排序)",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.label || item.title || "未命名選單",
          };
        },
      },
      fields: [
        {
          name: "type",
          label: "選單類型",
          type: "string",
          required: true,
          options: [
            { value: "link", label: "單一連結" },
            { value: "submenu", label: "下拉選單" },
          ],
          ui: {
            component: "select",
          },
        },
        {
          name: "id",
          label: "路徑辨識ID",
          type: "string",
          required: true,
        },
        {
          name: "label",
          label: "選單文字",
          type: "string",
          required: true,
        },
        {
          name: "href",
          label: "連結路徑",
          type: "string",
          description: "僅在「單一連結」類型時需要填寫",
        },
        {
          name: "secondary",
          label: "次要按鈕樣式",
          type: "boolean",
          description: "勾選後會套用特殊按鈕樣式(如「加入我們」、「捐款支持」)",
        },
        {
          name: "submenu",
          label: "下拉選單項目",
          type: "object",
          list: true,
          description: "僅在「下拉選單」類型時需要填寫",
          ui: {
            itemProps: (item) => {
              return {
                label: item.label || "未命名項目",
              };
            },
          },
          fields: [
            {
              name: "label",
              label: "項目名稱",
              type: "string",
              required: true,
            },
            {
              name: "href",
              label: "連結路徑",
              type: "string",
              required: true,
            },
          ],
        },
      ],
    },

    // 社群連結
    {
      name: "socialLinks",
      label: "社群媒體連結",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.name || item.title,
          };
        },
      },
      fields: [
        {
          name: "name",
          label: "平台名稱",
          type: "string",
          required: true,
        },
        {
          name: "url",
          label: "連結網址",
          type: "string",
          required: true,
        },
      ],
    },

    // 原有的 contactLinks 保留(向下相容)
    {
      name: "contactLinks",
      label: "Contact Links (舊版相容)",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title,
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
        {
          name: "icon",
          label: "Icon",
          type: "string",
          ui: {
            //@ts-ignore
            component: IconComponent,
          },
        },
      ],
    },
  ],
};
