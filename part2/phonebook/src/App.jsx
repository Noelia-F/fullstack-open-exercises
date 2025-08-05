import { useState } from 'react';

const NumberList = ({persons}) => {
  if (persons.length > 0) {
    return (
      <ul>
        {
          persons.map((person) => 
            <li key={person.id}>{person.name} {person.number}</li>
          )
        }
      </ul>
    );
  }
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 666666666, id: 1 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addName = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`);
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(nameObject)); 
    setNewName('');
    setNewNumber('');

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <NumberList persons={persons} />
    </div>
  )
}

export default App