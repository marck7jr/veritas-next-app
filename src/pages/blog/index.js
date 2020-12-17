import fs from "fs";
import matter from "gray-matter";
import { v4 as uuid } from "uuid";
import Blog from "./blog";

export const getStaticProps = async (context) => {
  const files = fs.readdirSync(`${process.cwd()}/src/pages/blog/_posts`);
  const posts = files
    .map((_) => {
      const content = fs.readFileSync(`src/pages/blog/_posts/${_}`).toString();
      const { data } = matter(content);

      return {
        ...data,
        id: uuid(),
        slug: _.replace(".md", ""),
      };
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return {
    props: { posts },
  };
}

export default Blog;
