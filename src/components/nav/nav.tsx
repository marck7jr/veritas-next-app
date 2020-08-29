import { useState } from 'react';
import Link from 'next/link';
import { Router, withRouter } from 'next/router';
import styles from './nav.module.scss';

const _ = [
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


const NavMenu = ({ router }: NavProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className={styles.nav}>
                <header>
                    <img src='/svg/Veritas.svg' />
                    <span>Veritas</span>
                    <Link href='/'>
                        <a id='-1'>Game Launcher</a>
                    </Link>
                </header>
                <div className={`${styles.content} ${isMenuOpen ? styles.open : ''}`}>
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
                <button className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src='/svg/Navigation.svg' />
                </button>
            </nav>
        </>
    );
}

export default withRouter(NavMenu);