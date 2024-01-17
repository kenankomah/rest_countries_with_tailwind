import { CountriesData, CountryType } from "../../../App";
import CountryCard from "./country_card";
import { useContext } from "react";
import Skeleton from "../../../components/skeleton/skeleton";

interface CountryListProps {
    countryList: CountryType[];
}

function CountryList({ countryList }: CountryListProps) {
    const { error, countries } = useContext(CountriesData);

    if (error) {
        return (
            <div className="error_container">
                <h3>Something went wrong, refresh the page to try again</h3>
            </div>
        );
    }

    if (!countries.length) return <Skeleton />;

    return (
        <div className="mx-auto mt-14 grid max-w-7xl gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {countryList.map((country: CountryType) => {
                return <CountryCard key={country.cca3} country={country} />;
            })}

            {!countryList.length && (
                <div className="empty_list">
                    <h3>No countries found</h3>
                </div>
            )}
        </div>
    );
}

export default CountryList;
