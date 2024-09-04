'use client';

import { CarsContext } from "@/contexts/CarsContext"
import { YearContext } from "@/contexts/YearContext"
import Link from "next/link"
import { useContext } from "react"

export default function LinkButton() {
    const { selectedCar } = useContext(CarsContext)
    const { selectedYear } = useContext(YearContext)

    return (<Link href={`/${selectedCar}/${selectedYear}`}><button type="button" className="px-6 py-2 rounded bg-neutral-600 text-white">Next</button></Link>)
}