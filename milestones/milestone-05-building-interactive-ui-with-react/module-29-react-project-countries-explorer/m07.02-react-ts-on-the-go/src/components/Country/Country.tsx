import { useState } from "react";
import type { CountryType } from "../../type";
import './Country.css'

export interface CountryProps {
    country: CountryType;
    handelVisitedCountry: (country: CountryType) => void;
    handelVisitedFlag: (flag: string) => void;
}

export default function({country, handelVisitedCountry, handelVisitedFlag}: CountryProps) {
    const [visited, setVisited] = useState<boolean>(false);

    const handleVisited = () => {
        setVisited(!visited);
        handelVisitedCountry(country);
    }


    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p className={`${visited && 'population-known'}`}>
                Capital: {country.capital.capital}
            </p>
            <p>Population: {country.population.population}</p>
            
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Mark as Visited'}
            </button>

            <button onClick={() => handelVisitedFlag(country.flags.flags.png)}>
                Add Flag as Visited
            </button>
        </div>
    )
}