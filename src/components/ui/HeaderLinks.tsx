import React from 'react';
import styles from "@/components/layout/header/Header.module.scss";
import Link from "next/link";

const HeaderLinks = ({ data, pathname }) => {
    return (
        <div>
            {data.length ? data.map(link => (
                <Link href={link.link} className={pathname === link.link ? styles.active : ''} key={link.id}>{link.name}</Link>
            )) : <p>There are no links</p>}
        </div>
    );
};

export default HeaderLinks;
