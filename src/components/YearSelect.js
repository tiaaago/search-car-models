'use client';

import { YearContext } from "@/contexts/YearContext";
import { useContext, useEffect } from "react";

export default function YearSelect() {
    const { setYear } = useContext(YearContext)

    const handleChangeYear = (year) => {
        setYear(year)
    }

    useEffect(() => handleChangeYear('2015'), [])

    return (
        <select className="flex-1 py-2 border text-sm rounded-lg block w-full p-2.5 bg-neutral-600 border-neutral-400 placeholder-neutral-400 text-white focus:ring-blue-500 focus:border-blue-500" onChange={(evt) => handleChangeYear(evt.target.value)}>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
    )
}