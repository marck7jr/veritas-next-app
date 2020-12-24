import Layout from "../../components/layout";
import Post from "../../components/post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdown";

const BlogPost = ({ post }) => {
  return (
    <>
      <Layout>
        <Post {...post} />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "content"]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  
  return {
    paths: posts.map((_) => {
      return {
        params: {
          slug: _.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default BlogPost;
