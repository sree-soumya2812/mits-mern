import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from './component/Counter'
import Navbar from './component/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Service from './pages/Service'
const App = ()=>{
    return (
        <>
        <Navbar/>
       <Routes>
        <Route path='/' element={<Home name="soumya"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/counter' element={<Counter/>}/>
       </Routes>
        </>
    )
}
export default App;