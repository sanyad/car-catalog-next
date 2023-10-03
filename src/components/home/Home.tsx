import React, {FC} from 'react';
import {useRouter} from "next/router";
import Layout from "@/components/layout/Layout";

const Home: FC = () => {
    const {} = useRouter()

    return (
        <Layout title={'Home page'}>
            <h1>Hello Next.js</h1>
        </Layout>
    )
};

export default Home;
