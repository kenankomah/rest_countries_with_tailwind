import { Link } from "react-router-dom";
import { CountryType } from "../../../App";

interface CountryCardProps {
    country: CountryType;
}

function CountryCard({ country }: CountryCardProps) {
    const { name, population, region, capital, flags } = country;
    const altText = flags.alt ? flags.alt : `Flag of ${name.common}`;
    return (
        <div className="bg-white drop-shadow-md hover:scale-105 hover:drop-shadow-2xl duration-300">
            <Link to={`/${country.cca3}`}>
                <img
                    loading="lazy"
                    src={flags.svg}
                    alt={altText}
                    className="object-cover w-full h-40 rounded-t-md"
                />
                <div className="pt-0 px-6 pb-8">
                    <h2 className="font-bold text-lg my-4">{name.common}</h2>
                    <p>
                        <span className="text-sm font-bold mr-1">
                            Population:
                        </span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className="text-sm font-bold mr-1 ">Region:</span>
                        {region}
                    </p>
                    <p>
                        <span className="text-sm font-bold mr-1">Capital:</span>
                        {capital}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default CountryCard;
