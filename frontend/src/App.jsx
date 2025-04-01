import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer></ToastContainer>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/doctors' element={<Doctors />}></Route>
        <Route path='/doctors/:speciality' element={<Doctors />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/my-profile' element={<MyProfile />}></Route>
        <Route path='/my-appointments' element={<MyAppointment />}></Route>
        <Route path='/appointment/:docId' element={<Appointment />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}
export default App