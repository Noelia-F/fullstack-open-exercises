import { useState, useEffect } from 'react';
import countriesService from './services/countries';

import Filter from './components/Filter';
import CountriesSection from './components/CountriesSection';

const App = () => {
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState(null);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    countriesService
      .getAll()
      .then((initialCountries) => setCountries(initialCountries));
  }, [filterName]);

  const handleFilter = (event) => {
    setFilterName(event.target.value);
  }

  const handleShowOf = (name) => {
    countriesService
      .getCountryDetail(name.toLowerCase())
      .then((selectedCountry) => {
        setCountry(selectedCountry);
        setCountries(null);
    });
  }

  return (
    <div>
      <Filter filterName={filterName} handleFilter={handleFilter} />
      <CountriesSection country={country} countries={countries} filterName={filterName} handleShowOf={handleShowOf} />
    </div>
  );
}

export default App