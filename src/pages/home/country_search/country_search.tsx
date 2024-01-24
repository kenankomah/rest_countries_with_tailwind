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

    return (
        <input
            className="bg-searchIcon-dark dark:bg-searchIcon-light dark:bg-headerDark mb-10 h-14 w-full rounded-md bg-white bg-no-repeat px-16 py-6 shadow-md focus-visible:outline-none md:mb-0 md:h-14 md:max-w-sm"
            type="text"
            placeholder="Search for a country..."
            ref={inputRef}
            name="search"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                document.body.classList.add("searching");
                const target = e.target as HTMLInputElement;
                setCountryList(searchByCountryName(target.value, regionList));
            }}
            style={{ backgroundPosition: "1.5625rem" }}
        />
    );
}
