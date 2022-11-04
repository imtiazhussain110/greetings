import React from "react";
import { useState } from "react";
import "../App.css";

function App() {
  const initialValue = {
    fName: "",
    lName: "",
  };
  const [formInput, setFormInput] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;

    if (name === "fName") {
      setFormInput({
        fName: newValue,
        lName: formInput.lName,
      });
    } else {
      setFormInput({
        fName: formInput.fName,
        lName: newValue,
      });
    }
  };

  const handleSubmit = (e) => {
    formInput.fName.length > 0 && formInput.lName.length > 0
      ? alert(`Hello ${formInput.fName} ${formInput.lName}!`)
      : alert("Please fill the form!");
    setFormInput(initialValue);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Greetings!</h1>
        <hr />
        <div className="fields">
          <input
            name="fName"
            type="text"
            placeholder="Enter your first name"
            onChange={handleChange}
            value={formInput.fName}
          />
          <input
            name="lName"
            type="text"
            placeholder="Enter your last name"
            onChange={handleChange}
            value={formInput.lName}
          />
        </div>
        <button className="submit-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
