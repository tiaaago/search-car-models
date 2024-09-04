'use client';

import { createContext, useState } from "react";

export const YearContext = createContext({})

export function YearProvider({ children }) {
    const [selectedYear, setSelectedYear] = useState('2015');

    const setYear = (year) => {
        setSelectedYear(year)
    }
    
    return (
        <YearContext.Provider value={{ selectedYear, setYear }}>
            { children }
        </YearContext.Provider>
    )
}