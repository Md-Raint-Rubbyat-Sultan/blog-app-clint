import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './routes/Router';

function App() {

  return (
    <div className='font-serif'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App
