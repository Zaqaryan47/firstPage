import './style.scss'
import Home from '../components/Home'
import About from '../components/About'
import Team from '../components/OurTeam'
import Menu from '../components/Menu'
import Reseption from '../components/reseption'
import Testi from '../components/testimonial'
import Footer from '../components/Footer'
import Webheader from './WebHeader'
import { Route, Routes } from 'react-router-dom'
import Service from '../components/Service'
import Aboutt from '../../router/booking'
import Serv from '../../router/service'
import Menus from '../../router/menu'
import Booking from '../../router/booking'
import Ourteam from '../../router/our team'
import Testii from '../../router/testimonial'
import Contacts from '../../router/contact'
import Aboutis from '../../router/about'
import Homesrot from '../../router/home'


const Webview = () => {

    return (

    <div className='L-block-web'>

        <Webheader/>
   
        




        <Routes>
            <Route path='/home' element={<Homesrot/>} index />
            <Route path='/about' element={<Aboutis/>}/>
            <Route path='/service' element={<Serv/>}/>
            <Route path='/menu' element={<Menus/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/ourteam' element={<Ourteam/>}/>
            <Route path='/testimonial' element={<Testii/>}/>
            <Route path='/contact' element={<Contacts/>}/>



            


        
        </Routes>

        <Footer/>

        
    </div>
    )
}
export default Webview