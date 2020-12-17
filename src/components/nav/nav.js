import Link from "next/link";
import { Router, withRouter } from "next/router";
import styles from "./nav.module.scss";

const _ = [
  {
    content: "Home",
    href: "/",
  },
  {
    content: "Blog",
    href: "/blog",
  },
  {
    content: "GitHub",
    href: "https://github.com/marck7jr/veritas-uwp-app",
    target: "_blank",
  },
];

const Nav = ({ router }) => {
  return (
    <>
      <nav className={styles.nav}>
        <NavHeader />
        <ol>
          {_.map((_, i) => (
            <li key={i}>
              <NavItem
                content={_.content}
                href={_.href}
                router={router}
                target={_.target}
              />
            </li>
          ))}
        </ol>
        <NavFooter />
      </nav>
    </>
  );
};

const NavFooter = () => {
  return (
    <>
      <footer className={styles.nav_footer}>
        <Link href="https://www.microsoft.com/store/r/9N16CCVC2WP9">
          <button>
            <a>Get Started</a>
          </button>
        </Link>
      </footer>
    </>
  );
};

const NavHeader = () => {
  return (
    <>
      <header className={styles.nav_header}>
        <img src="/static/svg/Veritas.svg" />
        <div>
          <strong>Veritas</strong>
          <span>Game Launcher</span>
        </div>
      </header>
    </>
  );
};

const NavItem = ({ content, href, router, target }) => {
  let className =
    router.pathname === href ? styles.nav_item__active : styles.nav_item;

  return (
    <>
      <Link href={href}>
        <a className={className} target={target}>
          {content}
        </a>
      </Link>
    </>
  );
};

export default withRouter(Nav);
