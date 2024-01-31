import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>test useState</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  );
}

export default App;
