import React from 'react';
import {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ICarDataSingle} from "@/interfaces/ car.interface";
import {CarService} from "@/services/car.service";
import CarDetail from "@/components/screens/car-detail/CarDetail";
import {ParsedUrlQuery} from "querystring";

const CarPage: NextPage<ICarDataSingle> = ({car}) => {
    return <CarDetail car={car} />;
};

interface Params extends ParsedUrlQuery {
    id: string;
}
export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const cars = await CarService.getAll()
    return {
        paths: cars.map(car => ({
             params: {
                 id: car.id.toString()
             }
        })),
        fallback: 'blocking'
    }
}
export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({params}) => {
    const car = await CarService.getById(params.id);
    return {
        props: {car},
        revalidate: 60
    }
}
// export const getServerSideProps: GetServerSideProps<ICarDataSingle> = async ({params}) => {
//     console.log('params ', params)
//     const car = await CarService.getById(params.id);
//     return {
//         props: {car}
//     }
// }

export default CarPage;
