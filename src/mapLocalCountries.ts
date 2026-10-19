import type { CountryType } from "./App";

export interface LocalCountry {
    name: string;
    topLevelDomain?: string[];
    alpha3Code: string;
    capital?: string;
    subregion?: string;
    region: string;
    population: number;
    borders?: string[];
    nativeName?: string;
    flags: {
        svg: string;
        png?: string;
    };
    currencies?: {
        code: string;
        name: string;
        symbol: string;
    }[];
    languages?: {
        iso639_1?: string;
        iso639_2?: string;
        name: string;
        nativeName?: string;
    }[];
}

export function mapLocalCountries(data: LocalCountry[]): CountryType[] {
    return data.map(mapLocalCountry);
}

function mapLocalCountry(country: LocalCountry): CountryType {
    const languages: CountryType["languages"] = {};
    for (const language of country.languages ?? []) {
        const key = language.iso639_1 || language.iso639_2 || language.name;
        languages[key] = language.name;
    }

    const currencies: CountryType["currencies"] = {};
    for (const currency of country.currencies ?? []) {
        currencies[currency.code] = {
            name: currency.name,
            symbol: currency.symbol,
        };
    }

    return {
        name: {
            common: country.name,
            official: country.name,
            nativeName: country.nativeName
                ? {
                      native: {
                          official: country.nativeName,
                          common: country.nativeName,
                      },
                  }
                : {},
        },
        population: country.population,
        region: country.region,
        capital: country.capital ? [country.capital] : [],
        flags: {
            svg: country.flags.svg,
            alt: `Flag of ${country.name}`,
        },
        cca3: country.alpha3Code,
        tld: country.topLevelDomain ?? [],
        languages,
        currencies,
        subregion: country.subregion ?? "",
        borders: country.borders ?? [],
    };
}
