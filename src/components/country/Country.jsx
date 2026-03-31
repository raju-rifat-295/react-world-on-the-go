import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, countVisited,handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(visited ? false : true);
        countVisited(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`} style={{ marginTop: '50px' }}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited} style={{ padding: '10px 15px', fontWeight: '600', fontSize: '20px' }}>
                {
                    visited ? 'Visited' : 'Not Visited'
                }
            </button>
            <br /><br />
            <button onClick={()=>{handleVisitedFlag(country?.flags?.flags?.png)}} style={{ padding: '10px 15px', fontWeight: '600', fontSize: '20px' }}>Add Visited Flag</button>
        </div>
    );
};

export default Country;