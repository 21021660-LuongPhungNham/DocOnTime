import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ?? '');

    const UrlBE = import.meta.env.VITE_BE_URL

    const value = {
        aToken, setAToken, UrlBE,
    };

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
}

export default AdminContextProvider;
