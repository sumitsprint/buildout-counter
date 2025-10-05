import { useState } from "react"; 

function useCounter (iv = 0){
  const [count, setCount] = useState(iv);
  const Increment = () => (setCount(c => c + 1));
  const Decrement = () => (setCount(c => c - 1));
   
  return {Increment, Decrement, count};



}



export default function App(){
  const {count, Increment, Decrement} = useCounter(0);

  return(
    <div className="App">
      <h1>
        Counter App
      </h1>
      <br/>
      <p>Count: {count}</p>
      <br/>
      
      <button onClick={Increment}>Increment</button>
      
      <button onClick={Decrement}>Decrement</button>
    </div>
  );

}