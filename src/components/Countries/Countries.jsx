import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const hadleVisitedCountry = country => {
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <ul>
                {visitedCountries.map(country => <li key={country.cca3}>{country.name?.common}</li>)}
            </ul>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} hadleVisitedCountry={hadleVisitedCountry} country={country} > </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;