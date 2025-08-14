const Filter = ({filterName, handleFilter}) => {
  return (
    <div>
      Find countries: <input value={filterName} onChange={handleFilter} />
    </div>
  );
}

export default Filter