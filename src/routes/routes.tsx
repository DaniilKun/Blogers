import { createBrowserRouter } from 'react-router-dom';
// import LogInPage from '../pages/LogInPage.tsx';
// import RegisterPage from '../pages/RegisterPage.tsx';
// import AuthLayout from '../layouts/AuthLayout.tsx';

import ErrorPage from '../pages/ErrorPage.tsx';
import HomePage from '../pages/HomePage.tsx';
import BlogerBlock from '../components/blogers/BlogerBlock.tsx';
import MainBlock from '../components/main/MainBlock.tsx';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children:[
      {
        index: true, // Указывает, что этот маршрут должен быть по умолчанию для родительского маршрута
        element: <MainBlock />, // Компонент для главной страницы
      },
      {
    path: 'my_shops',
    element: <h2>my_shops</h2>,
  },
  {
    path: 'my_products',
    element: <h2>my_products</h2>,
  },
  {
    path: 'blogers',
    element: <BlogerBlock/>
  },
  {
    path: 'statistics',
    element:<h2>statistics</h2>,
  },
  {
    path: 'choose_blogger',
    element: <h2>choose_blogger</h2>,
  },
  {
    path: 'budget',
    element: <h2>budget</h2>,
  },
  {
    path: 'telegram',
    element: <h2>telegram</h2>,
  },
  {
    path: 'help',
    element: <h2>help</h2>,
  },
    ]
  },
  
  
  {
    path: '*',
    element: <ErrorPage />,
  },
]);


// children:[
//   {
// path: 'my_shops',
// element: <MyShops />,
// },
// {
// path: 'my_products',
// element: <MyProducts />,
// },
// {
// path: 'blogers',
// element: <Blogers />,
// },
// {
// path: 'statistics',
// element: <Statistics />,
// },
// {
// path: 'choose_blogger',
// element: <ChooseBlogger />,
// },
// {
// path: 'budget',
// element: <Budget />,
// },
// {
// path: 'telegram',
// element: <Telegram />,
// },
// {
// path: 'help',
// element: <Hepl />,
// },
// ]