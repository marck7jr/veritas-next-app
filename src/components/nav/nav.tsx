import Link from 'next/link';
import { withRouter, Router } from 'next/router';
import styles from './nav.module.scss';

const _ = [
    {
        href: '/',
        name: 'Game Launcher'
    },
    {
        href: '/',
        name: 'Home'
    },
    {
        href: '/downloads',
        name: 'Downloads'
    },
];

type NavProps = {
    router: Router
}

const Nav = ({ router}: NavProps) => {

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.header}>
                    <img src='/svg/Veritas.svg' />
                    <span>Veritas</span>
                </div>
                <div className={styles.content}>
                    {_.map((item, index) => {
                        let className = router.pathname === item.href ? styles.active : null;

                        return (
                            <Link href={item.href} key={index}>
                                <a className={className} id={`${index}`}>
                                    {item.name}
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}

export default withRouter(Nav);