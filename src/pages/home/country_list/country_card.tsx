import { Link } from "react-router-dom";
import { CountryType } from "../../../App";

interface CountryCardProps {
    country: CountryType;
}

function CountryCard({ country }: CountryCardProps) {
    const { name, population, region, capital, flags } = country;
    const altText = flags.alt ? flags.alt : `Flag of ${name.common}`;
    return (
        <div className="">
            <Link to={`/${country.cca3}`}>
                <img
                    loading="lazy"
                    src={flags.svg}
                    alt={altText}
                    className="object-cover w-full h-40 rounded-t-md"
                />
                <div className="">
                    <h2>{name.common}</h2>
                    <p>
                        <span className="">Population:</span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className="">Region:</span>
                        {region}
                    </p>
                    <p>
                        <span className="">Capital:</span>
                        {capital}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default CountryCard;
