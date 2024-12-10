import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/doctors' element={<Doctors />}></Route>
        <Route path='/doctors/:speciality' element={<Doctors />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/my-profile' element={<MyProfile />}></Route>
        <Route path='/my-appointment' element={<MyAppointment />}></Route>
        <Route path='/appointment/:docId' element={<Doctors />}></Route>
      </Routes>
    </div>
  )
}
export default App