import './style.scss'
import Service from '../components/Service'
import About from '../components/About'
import Menu from '../components/Menu'
import Reseption from '../components/reseption'
import Team from '../components/OurTeam'
import Testi from '../components/testimonial'
import Home from '../components/Home'
import Mobheader from './mobileheader'
import Homesrot from '../../router/home'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Aboutis from '../../router/about'
import Serv from '../../router/service'
import Menus from '../../router/menu'
import Booking from '../../router/booking'
import Ourteam from '../../router/our team'
import Testii from '../../router/testimonial'
import Contacts from '../../router/contact'


const Mobileview = () => {

    return (

        <div>
            <Mobheader />
            <Routes>

            <Route path='/' element={<Homesrot/>} index />
            <Route path='/about' element={<Aboutis/>}/>
            <Route path='/service' element={<Serv/>}/>
            <Route path='/menu' element={<Menus/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/ourteam' element={<Ourteam/>}/>
            <Route path='/testimonial' element={<Testii/>}/>
            <Route path='/contact' element={<Contacts/>}/>

               






            </Routes>

            <Footer />

        </div>
    )
}
export default Mobileview