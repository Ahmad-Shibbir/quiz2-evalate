import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
          path:'/',
          element:<Home></Home>
      },
      {
          path:'home',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
      },
      {
          path:'statistics',
          element:<Statistics></Statistics>
      },
      {
          path:'Blog',
          element:<Blog></Blog>
      }
    ]
  }
])

function App() {
 

  return (
    <div className="">
        <RouterProvider router={router}></RouterProvider>
    </div>
   
  );
}

export default App;
