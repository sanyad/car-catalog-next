import React, {FC} from 'react';
import {ICarDataSingle} from "@/interfaces/ car.interface";
import Link from "next/link";
import styles from "./Car.module.scss"
import Image from "next/image";
import CarPrice from "@/components/screens/home/CarPrice";
import {useRouter} from "next/router";

const CarItem: FC<ICarDataSingle> = ({car}) => {
    const {query} = useRouter();
    return (
        <div className={`${styles.item} ${query.id ? styles.single : ''}`}>
            <Image src={car.image} alt={car.name} width={300} height={200} />
            <div className={styles.info}>
                <h2 className={styles.description}>
                    <span>Name:</span>
                    {car.name}
                </h2>
                <small className={styles.description}>
                    <span>Price:</span>
                    <CarPrice price={car.price}/>
                </small>
                {query.id ? (
                    <Link href={'/'}>Назад</Link>
                ) : (
                    <Link href={`/car/${car.id}`}>Detail information</Link>
                )}
            </div>
        </div>
    );
};

export default CarItem;
