import React from 'react';
import { Link } from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinksText,
} from './layout.module.css';

console.log('Container: ', container);

const Layout = (props) => {
    return (
        <main className={container}>
            <title>{props.pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinksText} to="/">
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinksText} to="/about">
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinksText} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <h1 className={heading}>{props.pageHeading}</h1>
            {props.children}
        </main>
    );
};

export default Layout;
