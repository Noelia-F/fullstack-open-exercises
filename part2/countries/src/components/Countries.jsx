import Country from './Country';
import SimpleList from './SimpleList';

const Countries = ({countries, handleShowOf}) => {
  if (countries.length === 0) {
    return (
      <div>
        <p>Country not found</p>
      </div>
    )
  }
  if (countries.length === 1) {
    return (
      <ul>
        {
          countries.map((country) => 
            <Country
              key={`${country.ccn3}-${country.cca3}`}
              country={country}
            />
          )
        }
      </ul>
    );
  }
  if (countries.length > 1) {
    return (
      <ul>
        {
          countries.map((country) => <SimpleList key={`${country.ccn3}-${country.cca3}`} name={country.name.common} handleShow={() => handleShowOf(country.name.common)} />)
        }
      </ul>
    );    
  }
}

export default Countries