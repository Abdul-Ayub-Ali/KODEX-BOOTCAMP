import { useState } from "react"

const App = () => {
  const [obj, setObj] = useState({
    username: 'abdul',
    age: 22,
    role: 'CTO , CEO , FOUNDER ,CMO AMAZON ,CEO GOOGLE',
  });
  const [array, setArray] = useState(['Abdul ','Ayub'])
  return (
    <div><h1>useState with reference data types </h1>
      <h2>Onclick pe obj.username change : {obj.username}</h2>
      <button onClick={() => {
        setObj({ ...obj, username: 'Abdul Ayub Ali' })
      }}>Change Object Details</button>
      <h1>{array}</h1>
      <button onClick={() =>{
        array[1] = 'Ayub Ali'
        setArray([array])
      }}>Change Array Details</button></div>
  )
}

export default App