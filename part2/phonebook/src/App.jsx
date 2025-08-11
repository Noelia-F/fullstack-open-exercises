import { useState } from 'react';

const NumberList = ({people}) => {
  if (people.length > 0) {
    return (
      <ul>
        {
          people.map((person) => 
            <li key={person.id}>{person.name} {person.number}</li>
          )
        }
      </ul>
    );
  }
}

const App = () => {
  const [people, setPersons] = useState([
    { name: 'Arto Hellas', number: 666666666, id: 1 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

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

    setPersons(people.concat(nameObject)); 
    setNewName('');
    setNewNumber('');

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
      <div>
        filter shown with: <input value={filterName} onChange={handleFilter} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <NumberList people={personFiltered} />
    </div>
  )
}

export default App