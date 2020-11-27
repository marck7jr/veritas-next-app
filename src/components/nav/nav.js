import Link from "next/link";
import { Router, withRouter } from 'next/router';
import styles from "./nav.module.scss";

const _ = [
  {
    content: "Home",
    href: "/",
  },
  {
    content: "Docs",
    href: "/docs",
  },
  {
    content: "Blog",
    href: "/blog",
  },
];

const Nav = ({router}) => {
  return (
    <>
      <nav className={styles.nav}>
        <NavHeader />
        <ol>
          {_.map((_, i) => (
            <li key={i}>
              <NavItem content={_.content} href={_.href} router={router} />
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
        <Link href="/downloads">
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
        <img src="static/svg/Veritas.svg" />
        <div>
          <strong>Veritas</strong>
          <span>Game Launcher</span>
        </div>
      </header>
    </>
  );
};

const NavItem = ({ content, href, router }) => {
  let className = router.pathname === href ? styles.nav_item__active : styles.nav_item;

  return (
    <>
      <Link href={href}>
        <a className={className}>{content}</a>
      </Link>
    </>
  );
};

export default withRouter(Nav);
