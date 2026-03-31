import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const countVisited = (country) => {
        // console.log('visited Country: ', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        // console.log('handle visited flag triggered : ',flag)
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }
    return (
        <div>
            <h2>In the countries: {countries.length}</h2>
            <h4>Total Visited Flags: {visitedFlag.length}</h4>
            <ol>
                {
                    visitedFlag.map((flag, index) => <li><img key={index} src={flag} alt="" /></li>)
                }
            </ol>

            <h4>Total Visited Countries: {visitedCountries.length}</h4>
            <ol>
                {
                    visitedCountries.map((country,index) => <li key={index}>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} countVisited={countVisited} handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;