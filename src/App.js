
import './App.css';
// import Home from './components/Homepage/Home';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <Home></Home> */}
      <Toaster/>
    </div>
  );
}

export default App;
