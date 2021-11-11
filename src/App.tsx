import React from 'react'
import './App.css'
import Main from "./Main"
import {RoutedDay} from "./Day"
import {Routes, Route} from "react-router-dom"

function App() {
  return <Routes>
    <Route path="/" element={<Main />}/>
    <Route path={"/:date"} element={<RoutedDay />} />
  </Routes>
}

export default App
