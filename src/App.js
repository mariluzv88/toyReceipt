import './App.css';
import Toys from './components/Toys';
import toys from './models/toys';


const state = {
  toys
}

function App() {
  return (
    <div className="App">
      <div>
       <Toys toyInfo={state.toys[0]}/> 
      </div>
      <div>
      <Toys toyInfo={state.toys[1]}/>
      </div>
      <div>
      <Toys toyInfo={state.toys[2]}/>
      </div>
      
      
    
    </div>
  );
}

export default App;
