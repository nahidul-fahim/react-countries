import { useState } from 'react';
import './Country.css'

const Country = ({country, hadleVisitedCountry}) => {
    const {name, flags, capital, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };
 
    return (
        <div className='country'>
            <h2 className='country-name'>{name?.common} <span className='country-code'>({cca3})</span> </h2>
            <h4 className='details'><span className='keys-style'>Capital City:</span> {capital} </h4>
            <h4 className='details'> <span className='keys-style'>Population:</span> {population} </h4>
            <img className='flag' src={flags?.png} alt="" />
            <button onClick={() => hadleVisitedCountry (country.name?.common)} className='primary-btn'>Mark Visited</button>
            <button onClick={handleVisited} className= {visited ? 'visited-btn' : 'not-visited-btn'} >Visit Status!</button>
        </div>
    );
};

export default Country;