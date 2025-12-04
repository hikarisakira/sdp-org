import type { Collection } from "tinacms";

export const CarouselCollection: Collection = {
  name: "carousel",
  label: "Carousels",
  path: "src/content/carousel",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true,
    },
    {
      type: "object",
      name: "blocks",
      label: "Page Blocks",
      list: true,
      templates: [
        {
          name: "heroCarousel",
          label: "Hero Carousel",
          fields: [
            {
              type: "boolean",
              name: "fullscreen",
              label: "Full Screen",
              description: "Make carousel fill entire viewport",
              ui: {
                defaultValue: true,
              },
            },
            {
              type: "boolean",
              name: "autoplay",
              label: "Auto Play",
              ui: {
                defaultValue: true,
              },
            },
            {
              type: "number",
              name: "delay",
              label: "Autoplay Delay (ms)",
              ui: {
                defaultValue: 5000,
              },
            },
            {
              type: "object",
              name: "slides",
              label: "Slides",
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
                  label: "Background Image",
                  required: true,
                },
                {
                  type: "string",
                  name: "title",
                  label: "Title",
                  required: true,
                },
                {
                  type: "string",
                  name: "subtitle",
                  label: "Subtitle",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "boolean",
                  name: "showButton",
                  label: "Show Button",
                  ui: {
                    defaultValue: false,
                  },
                },
                {
                  type: "string",
                  name: "buttonText",
                  label: "Button Text",
                },
                {
                  type: "string",
                  name: "buttonLink",
                  label: "Button Link",
                },
                {
                  type: "string",
                  name: "textColor",
                  label: "Text Color",
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
