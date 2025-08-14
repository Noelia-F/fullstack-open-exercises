const Person = ({person, handleDelete}) => {
  return (
    <li>
      <p>{person.name} {person.number}</p>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
}

export default Person