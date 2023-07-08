import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import route from './routes/Router';

function App() {

  return (
    <div className='font-serif'>
      <RouterProvider router={route}></RouterProvider>
      <Toaster position="bottom-center"
        reverseOrder={false}></Toaster>
    </div>
  )
}

export default App
