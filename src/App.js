
import './App.css';
import Gridcomponent from './components/Gridcomponent';
import Searchcomponent from './components/Searchcomponent';


function App() {
  return (
    <div className="App">
      <h1>Image Grid</h1>
      <Searchcomponent></Searchcomponent>
      <Gridcomponent></Gridcomponent>
    </div>
  );
}

export default App;
