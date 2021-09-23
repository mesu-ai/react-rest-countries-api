import './Countries.css'
import React, { useEffect, useState } from 'react';
import Country from '../country/Country';

const Countries = () => {
    const [countries,setcountries]= useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(data=>setcountries(data));


    },[]);



    return (
        <div>
            <h2>All {countries.length} Country Details </h2>
            {/* {countries.map(country=>console.log(country))} */}
            <div className="countries">
            { countries.map(country=><Country key={country.alpha2Code} country={country}></Country>)}
            

            </div>
            
        </div>
    );
};

export default Countries;