import React from 'react';
import { useState } from 'react'
import './App.css'
import CrudApp from './components/CrudApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>EJERCICIO CRUD</h1>
      <CrudApp />
      
      
    </>
  )
}

export default App
