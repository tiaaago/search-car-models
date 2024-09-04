'use client';

import { CarsContext } from "@/contexts/CarsContext";
import { useContext, useEffect } from "react";

export default function CarsSelect({ cars }) {
    const { selectedCar, setCar } = useContext(CarsContext)

    const handleChangeCar = (car) => {
        setCar(car)
    }

    useEffect(() => handleChangeCar(cars[0].MakeId), [])

    return (
        <select className="border text-sm rounded-lg block w-full p-2.5 bg-neutral-600 border-neutral-400 placeholder-neutral-400 text-white focus:ring-blue-500 focus:border-blue-500" id="carSelect" onChange={(evt) => handleChangeCar(evt.target.value)}>
            {
                cars.map(car => (
                    <option value={car.MakeId} key={car.MakeId}>{car.MakeName}</option>
                ))
            }
        </select>
    )
}