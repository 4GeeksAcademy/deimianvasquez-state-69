import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import { Layout } from './pages/Layout';
import SimpleCounter from './pages/SimpleCounter';
import SimpleCounterEffect from './pages/SimpleCounterEffect';

// components

// let counter = 0

// setInterval(() => {
//   //OJO ES UN EJEMPLO --> PUEDE SER MEJOR


//   counter++

//   console.log(counter)

//   ReactDOM.createRoot(document.getElementById('root')).render(

//     // <Layout />
//     <SimpleCounter
//       numberOne={counter / 1}
//       numberTwo={counter / 10}
//       numberThree={counter / 100}
//     />
//     ,
//   )
// }, 100)



ReactDOM.createRoot(document.getElementById('root')).render(
  <SimpleCounterEffect />
)