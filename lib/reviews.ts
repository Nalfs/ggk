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
interface CmsItem {
  id: number;
  attributes: any;
}

export async function getFeaturedReview(): Promise<Review> {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReview(slug: string): Promise<any> {
  // const text = await readFile(`content/reviews/${slug}.md`, "utf-8");
  // const {
  //   content,
  //   data: { title, date, image },
  // } = matter(text);
  // const body = marked(content);
  // return { slug, title, date, image, body };
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ["slug", "title", "subtitle", "publishedAt", "body"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 1, withCount: false },
  });
  const item = data[0];
  return {
    ...toReview(item),
    body: marked(item.attributes.body),
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
  const { data } = await fetchReviews({
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 6 },
  });
  return data.map(toReview);
}

export async function getSlugs(): Promise<string[]> {
  const { data } = await fetchReviews({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 100 },
  });
  return data.map((item: CmsItem) => item.attributes.slug);
}

async function fetchReviews(parameters: any) {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(parameters, { encodeValuesOnly: true });
  console.log("[fetchReviews]:", url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return await response.json();
}

function toReview(item: CmsItem): Review {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + attributes.image.data.attributes.url,
    body: null, // or you can set a default value for the body property
  };
}
