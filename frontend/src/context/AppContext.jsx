import PropTypes from "prop-types";
import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext({ doctors: [] });

const AppContextProvider = ({ children }) => {
    const currencySymbol = '$'

    const value = { doctors, currencySymbol };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppContextProvider;
