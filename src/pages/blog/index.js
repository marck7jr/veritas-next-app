import { getAllPosts } from "../../lib/api";
import Blog from "./blog";

export const getStaticProps = async () => {
  const posts = getAllPosts(["date", "title", "slug"]);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
