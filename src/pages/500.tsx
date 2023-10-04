import React from 'react';
import {NextPage} from "next";
import Layout from "@/components/layout/Layout";

const ErrorPage: NextPage = () => {
    return (
        <Layout title={'Server error page'}>
            <div style={{
                textAlign: 'center'
            }}>
                <Image src={'/500.jpeg'} width={450} height={433}/>
            </div>
        </Layout>
    );
};

export default ErrorPage;
