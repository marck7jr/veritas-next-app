import Link from "next/link";
import moment from "moment";
import Layout from "../../components/layout";
import styles from "./blog.module.scss";

const Blog = ({ posts }) => {
  return (
    <>
      <Layout>
        <article className={styles.blog}>
          <div className={styles.blog_content}>
            <h1>Blog</h1>
            <ul>
              {posts.map((_, id) => {
                return (
                  <li key={id}>
                    <BlogItem {..._} />
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </Layout>
    </>
  );
};

const BlogItem = ({ date, slug, title }) => {
  return (
    <>
      <div className={styles.blog_content_item}>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
        <span>{moment(date).fromNow()}</span>
      </div>
    </>
  );
};

export default Blog;
