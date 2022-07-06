import React from "react"
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "./actions/index"

function App() {
  const myState = useSelector((state)=> state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>Increment/Decrement counter</h1>
     <h4>using react and redux</h4>
     <button onClick={()=> dispatch(increment())}>Increment +</button>
     <input value={myState}/>
     <button onClick={()=> dispatch(decrement())}>Decrement -</button>
    </div>
  );
}

export default App;
