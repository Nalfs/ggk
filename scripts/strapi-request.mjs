import { writeFileSync } from "node:fs";
import qs from "qs";

const url =
  "http://127.0.0.1:8484/api/reviews" +
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

const response = await fetch(url);
const body = await response.json();

const formatted = JSON.stringify(body, null, 2);
const file = "scripts/strapi-response.json";
writeFileSync(file, formatted, "utf8");
