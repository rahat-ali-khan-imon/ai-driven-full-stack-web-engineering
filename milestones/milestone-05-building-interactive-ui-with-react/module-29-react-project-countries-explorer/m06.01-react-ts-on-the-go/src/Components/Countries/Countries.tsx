import { use, useState } from "react";
import type { CountryType } from "../../type";
import Country from "../Country/Country";
import './Countries.css'

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({countriesPromise}: CountriesProps) {
    const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);        // 1

    const countries = use(countriesPromise);

    const handleVisitedCountry = (country: CountryType): void => {                        // 2
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <h4>Visited Countries: {visitedCountries.length}</h4>              {/** 7 */}

            <div className="countries">
                {countries.map((country) =>
                    <Country 
                        key={country.ccn3.ccn3} 
                        country={country}
                        handelVisitedCountry={handleVisitedCountry}                 // 3
                    ></Country>
                )}
            </div>
        </div>
    )
}