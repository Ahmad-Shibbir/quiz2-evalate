import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Quiz from './Components/Quiz/Quiz';
import ErrorPage from './Components/ErrorPage/ErrorPage';

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
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
      },
      {
          path:'blog',
          element:<Blog></Blog>
      },
      {
          path:'quiz/:quizId',
          loader:async({params})=>{
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          } ,
          element:<Quiz></Quiz>
      }
    ]
  },

  {
    path:'/*',
    element: <ErrorPage></ErrorPage>
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
