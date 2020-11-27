import Head from "next/head";
import Content from "../content";
import Footer from "../footer";
import Nav from "../nav";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="xml+svg" href="static/svg/Veritas.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Veritas Game Launcher</title>
      </Head>
      <main className={styles.layout}>
        <Nav />
        <Content>{children}</Content>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
