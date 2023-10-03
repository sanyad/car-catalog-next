import React, {FC, PropsWithChildren} from 'react';
import Header from "@/components/layout/header/Header";
import {Titillium_Web} from "next/font/google";
import Meta from "@/components/seo/Meta";
import {IMeta} from "@/components/seo/Meta.interface";
export const titilliumWeb = Titillium_Web({ subsets: ['latin'], weight: ['400']})

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
    return (
        <Meta title={title} description={description}>
            <div className={titilliumWeb.className}>
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </Meta>
    );
};

export default Layout;
