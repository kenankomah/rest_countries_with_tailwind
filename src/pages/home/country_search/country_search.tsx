import { ChangeEvent, useEffect, useRef } from "react";
import { CountryType } from "../../../App";
import { searchByCountryName } from "../utilities";

interface CountrySearchProps {
    regionList: CountryType[];
    setCountryList: Function;
}

export default function CountrySearch({
    regionList,
    setCountryList,
}: CountrySearchProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const value = inputRef.current?.value;
        if (value) {
            setCountryList(searchByCountryName(value, regionList));
        }
    }, [regionList]);

    const searchIconStyles = {
        backgroundImage: `url('assets/search_icon.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "1.5625rem",
    };

    return (
        <input
            className="h-12 mb-10 md:h-14 md:mb-0 focus-visible:outline-none w-full h-14 w-96  w-full px-16 py-6 rounded-md shadow-md bg-white dark:bg-customDarkGray dark:text-white md:max-w-sm"
            type="text"
            placeholder="Search for a country..."
            ref={inputRef}
            name="search"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                document.body.classList.add("searching");
                const target = e.target as HTMLInputElement;
                setCountryList(searchByCountryName(target.value, regionList));
            }}
            style={searchIconStyles}
        />
    );
}
