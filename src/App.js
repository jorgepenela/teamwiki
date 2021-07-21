import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import {NavBar} from './components/NavBar/NavBar.js'; 
import Home from "./components/home/Home.js";
import Edit from "./components/Edit/Edit";


function App() {
  return (
    <div className="App">
      <main>
        <header>
          <NavBar></NavBar>
        </header>
        <div id="feed">
          <div className="container">
            <div className="row">
              <article className="col">
                {/*<Home></Home>*/}
                <Edit></Edit>
              </article>
            </div>
          </div>      
        </div>
      </main>
    </div>
  );
}

export default App;
