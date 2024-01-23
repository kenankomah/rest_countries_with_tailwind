import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/header";
import { CountriesData } from "../../App";
import CountrySearch from "./country_search/country_search";
import RegionSelector from "./region_selector/region_selector";
import CountryList from "./country_list/country_list";

export default function HomePage() {
    const { countries } = useContext(CountriesData);

    const [countryList, setCountryList] = useState(countries);
    const [regionList, setRegionList] = useState(countries);

    useEffect(() => {
        setCountryList(countries);
        setRegionList(countries);
    }, [countries]);

    return (
        <div className="">
            <Header />

            <main className="dark:bg-bodyDark px-4 md:px-14">
                <div className="mx-auto mt-32 flex w-full max-w-7xl flex-col justify-between md:flex-row">
                    <CountrySearch
                        regionList={regionList}
                        setCountryList={setCountryList}
                    />
                    <RegionSelector
                        setCountryList={setCountryList}
                        setRegionList={setRegionList}
                    />
                </div>

                <CountryList countryList={countryList} />
            </main>
        </div>
    );
}
