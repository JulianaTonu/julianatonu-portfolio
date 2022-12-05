
import './App.css';
import Home from './components/Homepage/Home';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <Home></Home>
      <Toaster/>
    </div>
  );
}

export default App;
