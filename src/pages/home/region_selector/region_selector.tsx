import { MouseEvent, useContext, useEffect, useState } from "react";
import { CountriesData } from "../../../App";
import { regionFilter } from "../utilities";
interface CountryFilterProps {
    setCountryList: Function;
    setRegionList: Function;
}

export default function RegionSelector({
    setCountryList,
    setRegionList,
}: CountryFilterProps) {
    const { countries } = useContext(CountriesData);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [region, setRegion] = useState("Filter by Region");

    useEffect(() => {
        document.querySelector("html")?.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            if (
                target?.classList.contains("dropdown-content") ||
                target?.classList.contains("dropdown-button") ||
                target?.classList.contains("chevron_container")
            )
                return;
            setIsMenuOpen(false);
        });
    }, []);

    function filterByRegion(region: string) {
        if (region === "Filter by Region" || region === "All Regions") {
            setRegionList(countries);
            return countries;
        }

        setRegionList(regionFilter(countries, region));
        return regionFilter(countries, region);
    }

    function menuSate(e: MouseEvent<HTMLDivElement>) {
        console.log("isMenuOpen", isMenuOpen);
        setIsMenuOpen(!isMenuOpen);

        const target = e.target as HTMLDivElement;
        if (target.nodeName === "P") {
            const textContent = target.textContent as string;
            setRegion(textContent);
            setCountryList(filterByRegion(textContent));
        }
    }

    const dropdownClassBase =
        "dropdown-content bg-white rounded-sm text-black absolute w-full z-10 drop-shadow-md top-16";

    const chevronClassBase =
        "chevron_container bg-no-repeat relative h-2.5 transition duration-100 w-3";

    const menuClass = isMenuOpen
        ? dropdownClassBase
        : `${dropdownClassBase} hidden`;

    const chevronClass = isMenuOpen
        ? `${chevronClassBase} rotate-180`
        : chevronClassBase;

    const chevronStyles = {
        backgroundImage: `url('assets/chevron_down_icon.svg')`,
        backgroundSize: "12px",
        top: "1px",
    };

    return (
        <div className="inline-block text-sm relative w-48" onClick={menuSate}>
            <button className="h-12 md:h-14 dropdown-button hover:bg-lightGray items-center bg-white border-0 rounded text-black cursor-pointer flex justify-between py-3 px-5 relative text-left w-full text-black drop-shadow-md">
                {region}
                <div className={chevronClass} style={chevronStyles}></div>
            </button>
            <div className={menuClass}>
                <p>All Regions</p>
                <p>Africa</p>
                <p>Americas</p>
                <p>Asia</p>
                <p>Europe</p>
                <p>Oceania</p>
            </div>
        </div>
    );
}
