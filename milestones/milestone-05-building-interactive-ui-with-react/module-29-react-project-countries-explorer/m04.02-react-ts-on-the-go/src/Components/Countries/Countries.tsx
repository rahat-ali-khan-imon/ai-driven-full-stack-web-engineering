import { use } from "react";
import type { CountryType } from "../../type";
import Country from "../Country/Country";
import './Countries.css'

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({countriesPromise}: CountriesProps) {
    const countries = use(countriesPromise);
    console.log(countries);

    return (
        // <div className="countries">
        //     <h2>Countries: {countries.length}</h2>
        //     {countries.map((country) =>                                          // remove ul
        //         <Country key={country.ccn3.ccn3} country={country}></Country>
        //     )}
        // </div>

        // <div className="countries">
        //     <h2>Countries: {countries.length}</h2>

        //     <div className="countries">
        //         {countries.map((country) =>
        //             <Country key={country.ccn3.ccn3} country={country}></Country>
        //         )}
        //     </div>
        // </div>

        <div>
            <h2>Countries: {countries.length}</h2>

            <div className="countries">                              {/** add div */}
                {countries.map((country) =>
                    <Country key={country.ccn3.ccn3} country={country}></Country>
                )}
            </div>
        </div>
    )
}