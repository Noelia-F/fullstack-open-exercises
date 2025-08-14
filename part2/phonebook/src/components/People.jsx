import Person from './Person';

const People = ({people, handleDeleteOf}) => {
  if (people.length > 0) {
    return (
      <ul>
        {
          people.map((person) => 
            <Person key={person.id} person={person} handleDelete={() => handleDeleteOf(person.id)} />
          )
        }
      </ul>
    );
  }
}

export default People