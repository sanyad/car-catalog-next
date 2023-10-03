import React from 'react';
import {NextPage} from "next";
import {useRouter} from "next/router";

const CarPage: NextPage = () => {
    const {push, replace} = useRouter()
    return (
        <div>
            Car page
            <button onClick={() => push('/')}>go home</button>
            <button onClick={() => replace('/')}>go home</button>
        </div>
    );
};

export default CarPage;
