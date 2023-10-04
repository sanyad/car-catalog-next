import Home from "@/components/screens/home/Home";
import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import {ICarData} from "@/interfaces/ car.interface";
import {CarService} from "@/services/car.service";

const HomePage: NextPage<ICarData> = ({cars = []}) => {
  return <Home  cars={cars}/>
};
export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
  const cars = await CarService.getAll();
  return {
    props: {cars}
  }
}
export default HomePage;
