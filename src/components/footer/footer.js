import Link from "next/link";
import { withRouter, Router } from "next/router";
import styles from "./footer.module.scss";

const _ = [
  {
    href: "/privacy",
    name: "Privacy",
  },
  {
    href: "https://github.com/marck7jr/veritas-next-app/issues",
    name: "Site feedback",
    target: "_blank",
  },
  {
    href: "https://github.com/marck7jr/veritas-next-app",
    name: "Source code",
    target: "_blank",
  },
];

const Footer = ({ router }) => {
  let date = new Date();

  return (
    <>
      <footer className={styles.footer}>
        <span>{`© Lucimarck J S Dias ${date.getFullYear()}`}</span>
        {_.map((item, index) => {
          let className =
            router.pathname === item.href
              ? `${styles.link} ${styles.link__active}`
              : styles.link;

          return (
            <Link href={item.href} key={index}>
              <a className={className} target={item.target}>
                {item.name}
              </a>
            </Link>
          );
        })}
      </footer>
    </>
  );
};

export default withRouter(Footer);
