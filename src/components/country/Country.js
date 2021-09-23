import './Country.css'
import React from 'react';

const Country = (props) => {
    const{name,capital,area,flags} = props.country;
    return (
        <div className="country">
            <h3>Name: {name}</h3>
            <h3>Capital: {capital}</h3> 
            <p>Area: {area}</p> 
            <img src={flags[0]} alt="" height="200px" width="250px"/>

        
        </div>
    );
};

export default Country;