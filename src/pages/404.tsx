import React from 'react';
import {NextPage} from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const NotFound: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Not Found</title>
            </Head>
            <div style={{
                textAlign: 'center'
            }}>
                <Image src={'/404.png'} width={450} height={433}/>
            </div>
        </Layout>
    );
};

export default NotFound ;
