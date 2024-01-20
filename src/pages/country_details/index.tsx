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

    const arrowIconStyles = {
        backgroundImage: `url('assets/arrows-left.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1.375rem 1.375rem",
        backgroundPosition: "1.8rem",
    };

    if (!selectedCountry)
        return (
            <div className="">
                <p>
                    Country not found! <br />
                    <Link to={"/"}>Back to homepage</Link>
                </p>
            </div>
        );

    return (
        <>
            <Header />
            <div className="px-4 md:px-14">
                <Link to="/">
                    <button
                        className="mt-32 h-8 w-28 rounded bg-white text-sm drop-shadow-md hover:bg-lightGray md:mt-40 md:h-10 md:w-32 md:text-base"
                        style={arrowIconStyles}
                    >
                        <span className="ml-6 md:ml-7">Back </span>
                    </button>
                </Link>
                <CountryDetailsInfo />
            </div>
        </>
    );
}

export default CountryDetails;
