import { Link, useParams } from "react-router-dom";
import { CountriesData, CountryType } from "../../App";
import { useContext } from "react";
import { findSelectedCountry } from "./utilities";

function CountryDetailsInfo() {
    const { countries } = useContext(CountriesData);

    let { countryCode } = useParams();
    // console.log(countryCode);
    // console.log(countries);
    // console.log(useParams());

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
        <div className="mt-16 grid gap-14 md:grid-cols-2 ">
            <img className="" src={flags.svg} alt={flags.alt} />
            <div className="">
                <div className="">
                    <h1 className="">{name.common}</h1>

                    <div className="">
                        <div className="">
                            <p className="">
                                <span className="">Native Name:</span>
                                {nativeName}
                            </p>
                            <p className="">
                                <span className="">Population:</span>
                                {population.toLocaleString()}
                            </p>
                            <p className="">
                                <span className="">Region:</span>
                                {region}
                            </p>
                            <p className="">
                                <span className="">Subregion:</span>
                                {subregion}
                            </p>
                            <p className="">
                                <span className="">Capital:</span>
                                {capital}
                            </p>
                        </div>

                        <div className="">
                            <p className="">
                                <span className="">Top Level Domain:</span>
                                {tld}
                            </p>
                            <p className="">
                                <span className="">Currencies:</span>
                                {currencyNameList.join(", ")}
                            </p>

                            <p className="">
                                <span className="">Languages:</span>
                                {Object.values(languages).join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
                {borderCountries?.length && (
                    <div className="">
                        <h2 className="">Border Countries:</h2>
                        {borderCountries?.map((neighbour) => {
                            const { cca3, name } = neighbour as CountryType;
                            return (
                                <Link key={cca3} to={`/${cca3}`}>
                                    <button className="">{name.common}</button>
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
