import { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

const myReducer = (state, event) => {
  switch(event.type){
    case "EDIT":
      return {
        ...state,
        status: 'editing'
      };
    case "CANCEL":
      return {
        ...state,
        status: 'reading'
      };
    case "COMMIT":
      return {
        ...state,
        value: event.value,
        status: 'reading'
      };
      default:
        return state;
  }
}

function App() {
  const [state, send] = useReducer(myReducer, {
    status: 'editing',
    value: 'Hello fwdays'
  })
  const { status , value } = state;
  console.log(status, 'status')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {status === 'editing' ? <p onClick={() => send({type: 'CANCEL'})}>{state.status}</p> : <input value="input" />}
        
      </header>
    </div>
  );
}

export default App;
