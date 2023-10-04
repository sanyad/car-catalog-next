import React from 'react';
import Layout from "@/components/layout/Layout";
import {NextPageAuth} from "@/interfaces/page.interface";

const AboutUs: NextPageAuth = () => {
    return (
        <Layout title={"About us"} description={"We love Next.js"}>
            AboutUs
        </Layout>
    );
};
// AboutUs.isUser = true;
export default AboutUs;
