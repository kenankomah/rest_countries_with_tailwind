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

            <main className="">
                <div className="mt-32 flex justify-between w-full mx-auto px-14 flex-col md:flex-row max-w-7xl ">
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
