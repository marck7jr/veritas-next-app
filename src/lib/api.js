import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectoryPath = `${process.cwd()}/src/pages/blog/_posts`;

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectoryPath);
};

export const getPostBySlug = (slug, fields = []) => {
  const displaySlug = slug.replace(/\.md$/, "");
  const path = join(postsDirectoryPath, `${displaySlug}.md`);
  const text = fs.readFileSync(path, "utf-8");
  const { data, content } = matter(text);

  const items = {};

  fields.forEach((_) => {
    if (_ === "slug") {
      items[_] = displaySlug;
    }
    if (_ === "content") {
      items[_] = content;
    }

    if (data[_]) {
      items[_] = data[_];
    }
  });

  return items;
};

export const getAllPosts = (fields = []) => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((_) => getPostBySlug(_, fields))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return posts;
};