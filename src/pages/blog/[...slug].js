import fs from "fs";
import matter from "gray-matter";
import { v4 as uuid } from "uuid";
import Layout from "../../components/layout";

const BlogPost = () => {
  return (
    <>
      <Layout>{slug}</Layout>
    </>
  );
};

export const getStaticPaths = async () => {
};

export default BlogPost;
