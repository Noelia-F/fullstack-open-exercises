import Person from './Person';

const People = ({people}) => {
  if (people.length > 0) {
    return (
      <ul>
        {
          people.map((person) => 
            <Person key={person.id} person={person} />
          )
        }
      </ul>
    );
  }
}

export default People