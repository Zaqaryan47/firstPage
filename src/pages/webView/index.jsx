import './style.scss'
import Footer from '../components/Footer'
import Webheader from './WebHeader'
import { Route, Routes } from 'react-router-dom'
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
            <Route path='/' element={<Homesrot/>} index />
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