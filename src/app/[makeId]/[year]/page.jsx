import Search from "@/components/SearchComponent"
import Searching from "@/components/SearchingComponent"
import Link from "next/link"
import { Suspense } from "react"

export async function generateStaticParams() {
    const cars = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`).then((res) => res.json())

    const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']

    const results = years.flatMap(year => {
        return cars.Results.flatMap(car => ({
            makeId: car.MakeId.toString(), year: year
        }))
    })

    return results
}

export default function Page({ params }) {
    const { makeId, year } = params;

    return (
        <>
            <div className="container mx-auto pt-20 px-10">
                <div className="flex flex-col gap-10">
                    <Suspense fallback={<Searching />}>
                        <Search makeId={makeId} year={year} />
                    </Suspense>
                    <Link className="flex" href="/"><button className="px-6 py-2 rounded bg-neutral-600 text-white">Back</button></Link>
                </div>
            </div>
        </>
    );
}