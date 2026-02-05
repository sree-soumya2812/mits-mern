import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from './Pages/about'
import Service from './Pages/Service'
import Contact from './Pages/contact'
import Counter from './Component/Counter'
import { Route, Routes } from 'react-router-dom'
import UseState from './Hooks/UseState'
import Login from './auth/Login'
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import SignedUp from './Auth/SignedUp'
import UseRef from './Hooks/UseRef'

const element = <h1>Hello</h1>
const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home name="Soumya" />} />
        <Route path='/about' element={<About name="Soumya" age={20} dept="Cyber Security" />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/useState' element={<UseState />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hook' element={<Hook />} />
        <Route path='/useEffect' element={<UseEffect />} />
        <Route path='/useEffectApi' element={<UseEffectApi />} />
        <Route path='/SignedUp' element={<SignedUp />} />
        <Route path='/UseRef' element={<UseRef />} />
      </Routes>

    
    </>
  )
}
export default App