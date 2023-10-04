import React, {Dispatch, FC, PropsWithChildren, SetStateAction, useState} from 'react';
import {createContext} from "react";
import {IUser} from "@/interfaces/user.interface";
import {TypeComponentAuthFields} from "@/interfaces/page.interface";
import NotFound from "@/pages/404";

type TypeContext = {
    user: IUser,
    setUser: Dispatch<SetStateAction<IUser>>
}
export const AuthContext = createContext<TypeContext>({
    user: null,
    setUser: () => {}
});

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ children, Component: {isUser = false} }) => {
    const [user, setUser] = useState<IUser>(null);
    if (isUser && !user) {
        return <NotFound />
    }
    return (
        <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
