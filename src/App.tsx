import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from "./pages/country_details";
import HomePage from "./pages/home";
import localCountries from "./data.json";
import { LocalCountry, mapLocalCountries } from "./mapLocalCountries";

export interface CountryType {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    population: number;
    region: string;
    capital: string[];
    flags: {
        svg: string;
        alt: string;
    };
    cca3: string;
    tld: string[];
    languages: { [key: string]: string };
    currencies: { [key: string]: { [key: string]: string } };
    subregion: string;
    borders: string[];
}

interface ContextValueType {
    countries: CountryType[];
    error: boolean;
}

export const CountriesData = createContext({} as ContextValueType);

const countries = mapLocalCountries(localCountries as LocalCountry[]);

function App() {
    const contextValue = { countries, error: false };

    return (
        <Router>
            <CountriesData.Provider value={contextValue}>
                <div className="app_container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/:countryCode"
                            element={<CountryDetails />}
                        />
                    </Routes>
                </div>
            </CountriesData.Provider>
        </Router>
    );
}

export default App;
