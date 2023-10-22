import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug: string) {
  const text = await readFile(`content/reviews/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { title, date, image, body };
}
