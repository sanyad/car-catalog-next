import React, {FC, PropsWithChildren} from 'react';
import Header from "@/components/layout/header/Header";
import {Titillium_Web} from "next/font/google";
import Meta from "@/components/seo/Meta";
import {IMeta} from "@/components/seo/Meta.interface";
import dynamic from "next/dynamic";
export const titilliumWeb = Titillium_Web({ subsets: ['latin'], weight: ['400']})

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
    ssr: false
})

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
    return (
        <Meta title={title} description={description ? description : ''}>
            <div className={titilliumWeb.className}>
                <Header />
                <main>
                    {children}
                </main>
                <DynamicFooter />
            </div>
        </Meta>
    );
};

export default Layout;
