import React from 'react';
import {NextPage} from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

const NotFound: NextPage = () => {
    return (
        <Layout title={'Not Found'}>
            <div style={{
                textAlign: 'center'
            }}>
                <Image src={'/404.png'} width={450} height={433}/>
            </div>
        </Layout>
    );
};

export default NotFound;
