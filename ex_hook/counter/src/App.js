
import { useState } from 'react';
import './App.css';


function useIncrement(addMount) {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((previousState) => previousState + addMount)
  }
  return [count,increase]
}


export default useIncrement;
