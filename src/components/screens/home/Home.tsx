import React, {FC} from 'react';
import Layout from "@/components/layout/Layout";
import {ICarData} from "@/interfaces/ car.interface";
import CarItem from "@/ui/car/CarItem";
import styles from "./Home.module.scss"

const Home: FC<ICarData> = ({cars = []}) => {
    return (
        <Layout title={'Home page'}>
            <h1 style={{
                textAlign: 'center'
            }}>Hello Next.js</h1>
            <div className={styles.list}>
                {cars.length ? cars.map((car) => (
                    <CarItem car={car} key={car.id} />
                )) : (
                    <p>There are no cars</p>
                )}
            </div>
        </Layout>
    )
};

export default Home;
