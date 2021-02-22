import logo from './logo.svg';
import './App.css';
import Barchart from './barchart'
import Donut from './donut'
function App() {
  return (
    <div className="App">
      <header className="">
        <Barchart/>
        <Donut/>
      </header>
    </div>
  );
}

export default App;
