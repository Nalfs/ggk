import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import qs from "qs";

const CMS_URL = "http://127.0.0.1:8484";

export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: any;
}

export async function getFeaturedReview(): Promise<Review> {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReview(slug: string) {
  // const text = await readFile(`content/reviews/${slug}.md`, "utf-8");
  // const {
  //   content,
  //   data: { title, date, image },
  // } = matter(text);
  // const body = marked(content);
  // return { slug, title, date, image, body };
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(
      {
        filters: { slug: { $eq: slug } },
        fields: ["slug", "title", "subtitle", "publishedAt", "body"],
        populate: { image: { fields: ["url"] } },
        pagination: { pageSize: 1, withCount: false },
      },
      { encodeValuesOnly: true }
    );
  const response = await fetch(url);
  const { data } = await response.json();
  const { attributes } = data[0];
  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + attributes.image.data.attributes.url,
    body: marked(attributes.body),
  };
}

// export async function getReviews(): Promise<Review[]> {
//   const slugs = await getSlugs();
//   const reviews: Review[] = [];
//   for (const slug of slugs) {
//     const review = await getReview(slug);
//     reviews.push(review);
//   }
//   reviews.sort((a, b) => b.date.localeCompare(a.date));
//   return reviews;
// }
export async function getReviews(): Promise<Review[]> {
  const url =
    `${CMS_URL}/api/reviews` +
    "?" +
    qs.stringify(
      {
        fields: ["slug", "title", "subtitle", "publishedAt"],
        populate: { image: { fields: ["url"] } },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 6 },
      },
      { encodeValuesOnly: true }
    );
  console.log("url:", url);
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map(({ attributes }: any) => ({
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + attributes.image.data.attributes.url,
  }));
}
export async function getSlugs(): Promise<string[]> {
  const files = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
