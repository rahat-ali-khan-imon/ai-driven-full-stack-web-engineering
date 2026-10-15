import { useState } from "react";
import type { CountryType } from "../../type";
import './Country.css'

export interface CountryProps {
    country: CountryType
}

export default function({country}: CountryProps) {
    const [visited, setVisited] = useState<boolean>(false);             // state 1

    const handleVisited = () => {
        setVisited(true);
    }

    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>                  {/** 3 */}
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Mark as Visited'}
            </button>
        </div>
    )
}