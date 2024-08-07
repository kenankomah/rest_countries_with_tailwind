import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from "./pages/country_details";
import HomePage from "./pages/home";
import axios from "axios";

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

function App() {
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [errorStatus, setErrorStatus] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    "https://restcountries.com/v3.1/all",
                );

                if (response.status !== 200) {
                    setErrorStatus(errorStatus);
                    throw new Error("Network response was not ok");
                }
                const data = response.data;
                setCountries(data);
            } catch (error) {
                setErrorStatus(true);
                console.error(error);
            }
        }
        fetchData();
    }, [errorStatus]);

    const contextValue = { countries, error: errorStatus };

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
