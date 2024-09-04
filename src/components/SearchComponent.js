export default async function Search({ makeId, year }) {
    const getCars = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
    const cars = await getCars.json().then(cars => cars.Results);

    return (
        <div className="flex flex-col gap-10">
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
        </div>
    )
}