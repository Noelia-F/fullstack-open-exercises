const Form = ({addName, handleNameChange, handleNumberChange, newName, newNumber, disabled}) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      
      <div>
        <button disabled={disabled} type="submit">add</button>
      </div>
    </form>
  );
}

export default Form