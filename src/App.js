// import logo from './logo.svg';
import "./App.css";
import party from "./party.png";

import { List } from "./List";

function App() {
  return (
    <div className="app">
      <img src={party} width="250px" alt="shopping cart" />
      <h1 class="animate__animated animate__heartBeat" >PARTY<br></br>supply list  </h1>
            <List />
    </div>
  );
}

export default App;
