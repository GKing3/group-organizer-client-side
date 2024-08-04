import { createContext, useContext, useState } from "react";

const GroupOrganizerContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [ isFontSizeLarge, setIsFontSizeLarge ] = useState(false);
    const [ isUpperCase, setIsUpperCase ] = useState(false);

    const setFontSize = () => {
        setIsFontSizeLarge(!isFontSizeLarge);
    };

    const setUpperCase = () => {
        setIsUpperCase(!isUpperCase);
    };

    const value = {isFontSizeLarge, setFontSize, isUpperCase, setUpperCase};

    return <GroupOrganizerContext.Provider value = {value}> {children} </GroupOrganizerContext.Provider>
}

export const useGroupOrganizer = () => useContext(GroupOrganizerContext);