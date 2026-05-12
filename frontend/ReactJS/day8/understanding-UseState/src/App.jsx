import { useState } from "react"

const App = () => {

  let [count, setCount] = useState(0);
  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div className="h-screen">
      <h1>count :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App