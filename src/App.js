import { useState } from "react";

function App() {
  const [name, setName] = useState({
    FirstName: "",
    LastName: "",
  });

  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.FirstName && name.LastName) {
      setFullName(`${name.FirstName} ${name.LastName}`);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          onChange={handleChange}
          name="FirstName"
          value={name.FirstName}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          onChange={handleChange}
          name="LastName"
          value={name.LastName}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
