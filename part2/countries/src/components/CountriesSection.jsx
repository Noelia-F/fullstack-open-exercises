import Countries from './Countries';
import Country from './Country';

const CountriesSection = ({countries, country, filterName, handleShowOf}) => {
  if(countries) {
    const countriesFiltered = filterName
      ? countries.filter((country) => country.name.common.toLowerCase().includes(filterName.toLowerCase()))
      : countries;

    return (
      <>
        {
          countriesFiltered.length > 10
            ? <p>Too many matches, specify another filter</p>
            : <Countries countries={countriesFiltered} handleShowOf={handleShowOf} />
        }
      </>
    );
  }

  if (country) {
    return (
      <Country country={country} />
    )
  }
}

export default CountriesSection;