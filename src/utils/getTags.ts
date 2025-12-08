import { getCollection } from "astro:content";

export async function getAllTags() {
  const posts = await getCollection("blog");
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.data.tags?.forEach((tag: string) => tags.add(tag));
  });

  return Array.from(tags);
}

export async function getTagCount(tag: string) {
  const posts = await getCollection("blog");
  return posts.filter((post) => post.data.tags?.includes(tag)).length;
}
