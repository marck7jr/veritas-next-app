import Head from 'next/head';
import styles from './layout.module.scss';
import Nav from '../nav';
import Footer from '../footer';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Veritas Game Launcher</title>
                <link href='/svg/Veritas.svg' rel='icon' type='xml+svg' />
            </Head>

            <div className={styles.layout}>
                <Nav />
                {children}
                <Footer />
            </div>
        </>
    );
};

export default Layout;