import Todo from './components/todo main'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todos ,settodos] = useState([''])
  const [input, setinput] = useState('')
  function handler(Event){

    settodos([...todos,input])
    setinput('')
    Event.preventDefault();
  }


  
  return (
    <div className="App">
      <Todo />
      <form>
      <input type="text" value= {input} onChange={Event => setinput(Event.target.value)}/>
            <button type="submit" disabled= {!input} onClick = {handler}> add </button>
            </form>
          <ul class="list-group list-group-flush" >{ todos.map(todo => ( <li class="list-group-item" > {todo} </li>))} </ul> 
    </div>
  );
}

export default App;