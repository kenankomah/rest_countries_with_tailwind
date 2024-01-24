import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CountriesData } from "../../App";
import Header from "../../components/header/header";
import CountryDetailsInfo from "./country_details_info";
import { findSelectedCountry } from "./utilities";

function CountryDetails() {
    const { countries } = useContext(CountriesData);
    let { countryCode } = useParams();

    const selectedCountry = findSelectedCountry(countryCode, countries);

    if (!selectedCountry)
        return (
            <div className="h-dvh text-3xl">
                <p className="relative top-1/2 text-center ">
                    Country not found! <br />
                    <Link to={"/"} className="text-blue-600 underline">
                        Back to homepage
                    </Link>
                </p>
            </div>
        );

    return (
        <>
            <Header />
            <div className="dark:bg-bodyDark mx-auto box-content max-w-7xl px-4 md:px-14">
                <Link to="/">
                    <button className="back-button dark:hover:bg-darkHover dark:bg-headerDark mt-32 h-8 w-28 rounded bg-white text-sm drop-shadow-md hover:bg-lightGray md:mt-40 md:h-10 md:w-32 md:text-base dark:text-white">
                        <span className="ml-6 md:ml-7">Back </span>
                    </button>
                </Link>
                <CountryDetailsInfo />
            </div>
        </>
    );
}

export default CountryDetails;
