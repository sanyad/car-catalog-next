import React from 'react';
import styles from './Header.module.scss'
import {useRouter} from "next/router";
import HeaderLinks from "@/components/ui/HeaderLinks";

const links = [
    {
        name: 'Home',
        link: '/',
        id: 1
    },
    {
        name: 'About page',
        link: '/about-us',
        id: 2
    }
]

const Header = () => {
    const {pathname} = useRouter()
    return (
        <header className={`${styles.header}`}>
            <HeaderLinks data={links} pathname={pathname}/>
        </header>
    );
};

export default Header;
