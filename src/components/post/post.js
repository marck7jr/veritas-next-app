import styles from "./post.module.scss";

const Post = ({ title, date, content }) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_layout}>
        <PostHeader date={date} title={title} />
        <PostBody content={content} />
      </div>
    </div>
  );
};

const PostBody = ({ content }) => {
  return (
    <article className={styles.post_body}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

const PostHeader = ({ title, date }) => {
  return (
    <header className={styles.post_header}>
      <h1>{title}</h1>
      <span>{date}</span>
    </header>
  );
};

export default Post;
