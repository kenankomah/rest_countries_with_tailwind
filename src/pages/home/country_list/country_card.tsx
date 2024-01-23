import { Link } from "react-router-dom";
import { CountryType } from "../../../App";

interface CountryCardProps {
    country: CountryType;
}

function CountryCard({ country }: CountryCardProps) {
    const { name, population, region, capital, flags } = country;
    const altText = flags.alt ? flags.alt : `Flag of ${name.common}`;
    return (
        <div className="dark:bg-headerDark bg-white drop-shadow-md duration-300 hover:scale-105 hover:drop-shadow-2xl">
            <Link to={`/${country.cca3}`}>
                <img
                    loading="lazy"
                    src={flags.svg}
                    alt={altText}
                    className="h-40 w-full rounded-t-md object-cover"
                />
                <div className="px-6 pb-8 pt-0">
                    <h2 className="my-4 text-lg font-bold">{name.common}</h2>
                    <p>
                        <span className="mr-1 text-sm font-bold">
                            Population:
                        </span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className="mr-1 text-sm font-bold">Region:</span>
                        {region}
                    </p>
                    <p>
                        <span className="mr-1 text-sm font-bold">Capital:</span>
                        {capital}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default CountryCard;
