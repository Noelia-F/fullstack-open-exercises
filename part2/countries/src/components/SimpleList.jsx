const SimpleList = ({name, handleShow}) => {
  return (
    <li>
      <span>{name}</span>
      <button onClick={handleShow}>show</button>
    </li>
  );
}

export default SimpleList