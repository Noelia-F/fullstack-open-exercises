import { useState } from 'react';

const NumberList = ({persons}) => {
  if (persons.length > 0) {
    return (
      <ul>
        {
          persons.map((person) => 
            <li key={person.id}>{person.name}</li>
          )
        }
      </ul>
    );
  }
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('');

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(nameObject)); 
    setNewName('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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