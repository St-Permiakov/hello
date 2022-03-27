import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Nav } from '@/components/Nav';

import styles from './Layout.scss';

export const Layout = () => {
    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <div className="container">
                    <Header />
                </div>
            </header>
            <div className="container">
                <div className={styles.wrapper}>
                    <main className={styles.main}>
                        <Main />
                    </main>
                    <nav className={styles.nav}>
                        <Nav />
                    </nav>
                </div>
            </div>
            <footer className={styles.footer}>
                <div className="container">
                    <Footer />
                </div>
            </footer>
        </div>
    );
};

