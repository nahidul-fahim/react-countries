import './Country.css'

const Country = ({country}) => {
    const {name, flags, capital, population} = country;
    return (
        <div className='country'>
            <h2 className='country-name'>{name?.common} </h2>
            <h4 className='details'><span className='keys-style'>Capital City:</span> {capital} </h4>
            <h4 className='details'> <span className='keys-style'>Population:</span> {population} </h4>
            <img className='flag' src={flags?.png} alt="" />
        </div>
    );
};

export default Country;