const getCars = async (makeId, year) => {
    try {
        const find = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
        const cars = await find.json();
        return cars.Results;
    } catch (e) {
        return []
    }
}

export default async function Search({ makeId, year }) {
    if (!makeId || !year) return (
        <div className="flex flex-col gap-10">
            <h1 className="text-3xl text-center text-white font-semibold">Not found cars in this maker/year.</h1>
        </div>
    )

    const cars = await getCars(makeId, year)
    
    if (!cars) return (
        <div className="flex flex-col gap-10">
            <h1 className="text-3xl text-center text-white font-semibold">A system error occured. Try again later.</h1>
        </div>
    )

    return (
        <div className="flex flex-col gap-10">
            {
                cars?.length > 0 ? (
                    <>
                        <h1 className="text-3xl text-center text-white font-semibold">{cars[0].Make_Name} | {year}</h1>
                        <div className="flex flex-col gap-5">
                            {
                                cars.map(car => (
                                    <div key={car.Model_Name} className="bg-neutral-600 p-3 text-white rounded">
                                        <p className="">{car.Model_Name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl text-center text-white font-semibold">Not found cars in this maker/year.</h1>
                    </>
                )
            }
        </div>
    )
}