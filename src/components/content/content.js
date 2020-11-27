import styles from "./content.module.scss";

const Content = ({ children }) => {
  return (
    <>
      <main className={styles.content}>{children}</main>
    </>
  );
};

export default Content;
