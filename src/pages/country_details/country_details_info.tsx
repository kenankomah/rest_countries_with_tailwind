import { Link, useParams } from "react-router-dom";
import { CountriesData, CountryType } from "../../App";
import { useContext } from "react";
import { findSelectedCountry } from "./utilities";

function CountryDetailsInfo() {
    const { countries } = useContext(CountriesData);

    let { countryCode } = useParams();

    const selectedCountry = findSelectedCountry(countryCode, countries);

    const {
        name,
        languages,
        currencies,
        population,
        region,
        subregion,
        capital,
        tld,
        borders,
        flags,
    } = selectedCountry as CountryType;

    const borderCountries = borders?.map((border) => {
        return countries.find(
            (country) => country.cca3 === border,
        ) as CountryType;
    });

    const nativeName = Object.values(name.nativeName)[0].common;
    const currencyArray = Object.values(currencies);
    const currencyNameList = currencyArray.map(({ name }) => {
        return name;
    });

    return (
        <div className="mt-16 grid items-center gap-14 md:grid-cols-2 xl:gap-32">
            <img className="" src={flags.svg} alt={flags.alt} />
            <div className="">
                <div className="">
                    <h1 className="mb-8 text-2xl font-bold md:text-3xl">
                        {name.common}
                    </h1>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="">
                            <p className="my-2 text-sm md:text-base">
                                <span className="mr-1 font-bold">
                                    Native Name:
                                </span>
                                {nativeName}
                            </p>
                            <p className="my-2 text-sm md:text-base">
                                <span className="mr-1 font-bold">
                                    Population:
                                </span>
                                {population.toLocaleString()}
                            </p>
                            <p className="my-2 text-sm md:text-base">
                                <span className="mr-1 font-bold">Region:</span>
                                {region}
                            </p>
                            <p className="my-2 text-sm md:text-base">
                                <span className="mr-1 font-bold">
                                    Subregion:
                                </span>
                                {subregion}
                            </p>
                            <p className="my-2 text-sm md:text-base">
                                <span className="mr-1 font-bold">Capital:</span>
                                {capital}
                            </p>
                        </div>

                        <div className="my-2 text-sm md:text-base">
                            <p className="">
                                <span className="mr-1 font-bold">
                                    Top Level Domain:
                                </span>
                                {tld}
                            </p>
                            <p className="my-2 text-sm md:text-base">
                                <span className=" mr-1 font-bold">
                                    Currencies:
                                </span>
                                {currencyNameList.join(", ")}
                            </p>

                            <p className="my-2 text-sm md:text-base">
                                <span className="mr-1 font-bold">
                                    Languages:
                                </span>
                                {Object.values(languages).join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
                {borderCountries?.length && (
                    <div className="mb-12 flex flex-wrap items-center gap-1 md:mb-0 md:mt-12">
                        <h2 className="mr-3 text-sm font-bold md:text-base">
                            Border Countries:
                        </h2>
                        {borderCountries?.map((neighbour) => {
                            const { cca3, name } = neighbour as CountryType;
                            return (
                                <Link key={cca3} to={`/${cca3}`} className="">
                                    <button className="dark:hover:bg-darkHover dark:bg-headerDark m-0 h-8 min-w-24 rounded bg-white px-2 text-sm drop-shadow-md hover:bg-lightGray md:h-10 md:text-base">
                                        {name.common}
                                    </button>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CountryDetailsInfo;
