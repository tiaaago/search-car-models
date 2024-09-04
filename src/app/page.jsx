import CarsSelect from "@/components/CarsSelect";
import LinkButton from "@/components/LinkButton";
import YearSelect from "@/components/YearSelect";

export default async function Page() {
    const getCars = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
    const cars = await getCars.json().then(cars => cars.Results);

    return (
        <>
            <div className="container mx-auto pt-20 px-10">
                <form className="flex flex-col gap-6">
                    <h1 className="text-3xl text-center text-white font-semibold">Car Models Search</h1>
                    <div className="flex flex-row flex-wrap gap-10">
                        <div className="flex flex-col flex-1 py-2 gap-2">
                            <p className="text-base text-white">Choose an make:</p>
                            <CarsSelect cars={cars} />
                        </div>
                        <div className="flex flex-col flex-1 py-2 gap-2">
                            <p className="text-base text-white">Choose an year:</p>
                            <YearSelect />
                        </div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <LinkButton />
                    </div>
                </form>
            </div>
        </>
    );
}
