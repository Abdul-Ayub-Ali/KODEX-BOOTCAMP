import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [toggle, setToggle] = useState('Login');

  return (
    <div>
      {
        toggle?<Register setToggle={setToggle}/> : <Login setToggle={setToggle} /> 
      }
    </div>
  );
};

export default App;