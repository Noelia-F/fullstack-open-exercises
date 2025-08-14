import { useState, useEffect } from 'react';
import peopleService from './services/people';

import Filter from './components/Filter';
import Form from './components/Form';
import People from './components/People';

const App = () => {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    peopleService
      .getAll()
      .then((initialPeople) => setPeople(initialPeople));
  }, []);

  const addName = (event) => {
    event.preventDefault();

    if (people.some((person) => person.name === newName)) {
      const text = `${newName} is already added to phonebook, replace the old number with a new one`;
      const person = people.find(person => person.name === newName);
      const changedPerson = {...person, number: newNumber}
  
      if (confirm(text)) {
        return peopleService
          .update(changedPerson.id, changedPerson)
          .then( returnedPerson => {
            setPeople(people.map(person => person.id !== returnedPerson.id ? person : returnedPerson));
            setNewName('');
            setNewNumber(''); 
          })
      }
    }

    const nameObject = {
      name: newName,
      number: newNumber,
    }

    peopleService
      .create(nameObject)
      .then((returnedPeople) => {
        setPeople(people.concat(returnedPeople)); 
        setNewName('');
        setNewNumber(''); 
      });
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
     setDisabledButton(!newNumber || !event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    setDisabledButton(!newName || !event.target.value);
  }

  const handleFilter = (event) => {
    setFilterName(event.target.value);
  }

  const handleDeleteOf = (id) => {
    const person = people.find(person => person.id === id);
    const text = `Delete ${person.name}?`;

    if (confirm(text) === true) {
      return peopleService
        .remove(id)
        .then(currentPerson => setPeople(people.filter((person) => person.id !== currentPerson.id)));
    }
  }

  const personFiltered = filterName
    ? people.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))
    : people;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <Form
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        disabled={disabledButton}
      />
      <h2>Numbers</h2>
      <People people={personFiltered} handleDeleteOf={handleDeleteOf} />
    </div>
  )
}

export default App