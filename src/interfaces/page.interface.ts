import {NextPage} from "next";

export type TypeRoles = {
    isUser?: boolean
};

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles;

export type TypeComponentAuthFields = { Component: TypeRoles };
