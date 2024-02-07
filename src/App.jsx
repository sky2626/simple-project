import { useState } from 'react'
import Navbar from './component/Navbar'
import Specialfooter from './component/Specialfooter'
import Hero from './component/Hero'
import ToDoList from './component/ToDoList'

function App() {
  

  return (
    <>
      <Navbar />
      <ToDoList />
      <Hero />
      <Specialfooter />
    </>
  )
}

export default App
