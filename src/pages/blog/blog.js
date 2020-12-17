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
              {posts.map((_) => {
                return BlogItem(_);
              })}
            </ul>
          </div>
        </article>
      </Layout>
    </>
  );
};

const BlogItem = ({ date, id, slug, title }) => {
  return (
    <>
      <li className={styles.blog_content_item} key={id}>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
        <span>{moment(date).fromNow()}</span>
      </li>
    </>
  );
};


export default Blog;
