import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from "./componentes/Formulario";
import Home from './routers/home';
import Inicio from './componentes/Inicio';
import Calificaciones from './componentes/Calificaciones';
import Carreras from './componentes/Carreras';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
               
      </>
    ),
    errorElement: <h1>ups :c</h1>,
    children: [
      {
        path: "/",
        element: <Inicio/>,
      },
      {
        path: "al/alumnos",
        element: <Form/>,
      },
      {
        path: "al/calAlumnos",
        element: <Calificaciones/>,
      },
      {
        path: "al/carreras",
        element: <Carreras/>,
      },
    ] 
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

