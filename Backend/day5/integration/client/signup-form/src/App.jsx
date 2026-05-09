import { useState } from "react";
import axios from 'axios';

const App = () => {
  // 1. Move state to the top level
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log("User Data Submitted:", user);
    try {
      let res = await axios.post('http://localhost:3000/users', user);
      console.log('Data posted successfully', res.data);
    } catch (error) {
      console.log('Error in posting data',error);
    };
  };

  // Helper to handle all input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,       // Copy existing state
      [name]: value  // Update only the specific field
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>User Signup Form</h3>

        <div>
          <label>Name</label><br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age</label><br />
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;