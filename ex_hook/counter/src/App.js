
import { useState } from 'react';
import './App.css';


function App() {
  const [counter1,setCount1]=useState(0);
  const [counter2,setCount2]=useState(0);
  return (
   <div style={{textAlign:'center'}}>
   <h2>COUNT 1: {counter1}</h2>
    <button onClick={()=> setCount1((previousState) => previousState+1)}>Add1</button>
   <h2>COUNT 2: {counter2}</h2>
   <button onClick={()=> setCount2((previousState) => previousState+2)}>Add2</button>
   </div>
  );
}

export default App;
