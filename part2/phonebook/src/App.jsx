import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import Form from './components/Form';
import People from './components/People';

const App = () => {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPeople(response.data));
  }, []);

  const addName = (event) => {
    event.preventDefault();

    if (people.some((person) => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`);
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: people.length + 1,
    }

    axios
      .post('http://localhost:3001/persons', nameObject)
      .then((response) => {
        setPeople(people.concat(response.data)); 
        setNewName('');
        setNewNumber(''); 
      });
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setFilterName(event.target.value);
  }

  const personFiltered = filterName
    ? people.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))
    : people;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <People people={personFiltered} />
    </div>
  )
}

export default App