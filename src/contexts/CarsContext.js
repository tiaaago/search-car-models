'use client';

import { createContext, useState } from "react";

export const CarsContext = createContext({})

export function CarsProvider({ children}) {
    const [selectedCar, setSelectedCar] = useState();

    const setCar = (carId) => {
        setSelectedCar(carId)
    }
    
    return (
        <CarsContext.Provider value={{ selectedCar, setCar }}>
            { children }
        </CarsContext.Provider>
    )
}