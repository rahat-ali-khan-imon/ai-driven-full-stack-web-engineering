import type { CountryType } from "../../type";

export interface CountryProps {
    country: CountryType
}

export default function({country}: CountryProps) {
    return (
        <div>
            <h3>{country.name.common}</h3>
        </div>
    )
}