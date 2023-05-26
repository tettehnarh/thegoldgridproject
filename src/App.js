import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import { FaSignOutAlt } from "react-icons/fa";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    occupation: "",
  });

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? "0" + day : day;
    return `${year}-${month}-${day}`;
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
    },
    {
      id: 4,
      name: "dateOfBirth",
      type: "date",
      placeholder: "Date Of Birth",
      label: "Date Of Birth",
      required: true,
      max: getCurrentDate(),
    },
    {
      id: 5,
      name: "country",
      type: "select",
      placeholder: "Country",
      label: "Country",
      required: true,
    },
    {
      id: 6,
      name: "occupation",
      type: "text",
      placeholder: "Occupation",
      label: "Occupation",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  console.log(values);

  return (
    <div className='app'>
      <button className='logout-button' onClick={handleLogout}>
        <FaSignOutAlt className='logout-icon' />
      </button>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
