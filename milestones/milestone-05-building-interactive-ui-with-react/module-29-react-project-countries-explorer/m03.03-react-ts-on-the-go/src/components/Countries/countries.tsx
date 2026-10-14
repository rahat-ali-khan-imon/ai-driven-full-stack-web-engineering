import { use } from "react";
import type { CountryType } from "../../type";
import Country from "../Country/Country";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function({countriesPromise}: CountriesProps) {
    const countries = use(countriesPromise);
    console.log(countries);

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <ul>
                {countries.map((country) =>
                    <Country key={country.ccn3.ccn3} country={country}></Country>
                )}
            </ul>
        </div>
    )
}