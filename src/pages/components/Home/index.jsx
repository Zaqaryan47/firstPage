import './style.scss'
import '../../../assets/icon/style.css'
import animat from '../../../assets/img/hero.png'
import { homeutil } from '../Service/utils'
import Copmhome from '../Service/service-component'
import Service from '../Service'
import About from '../About'
import Menu from '../Menu'
import Reseption from '../reseption'
import Team from '../OurTeam'
import Testi from '../testimonial'

const Home = () => {

    return (

        <div className='L-web-block'>
            <div className="back-img">
            <div className="section">
                <div className="text-anim">
                    <div className="left-text">
                        <h1 className="title1">Enjoy Our</h1>
                        <h1 className="title1">Delicious Meal</h1>
                        <p className="title-desk">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <button className="button-book">BOOK A TABLE</button>
                    </div>
                    <div className="right-anim">
                        <img className='img-anim' src={animat} />
                    </div>
                </div>
            </div>
            </div>



      



            
        

            
        </div>
    )
}
export default Home