import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './Routes/Routes';

function App() {
  return (
    <div data-them='cupcake' className='max-w-screen-xl mx-auto '>
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
