import AboutComp from './aboutcomponents';
import './style.scss';
import { images } from './util';



const About = ()=>{
    return(
        <div className='L-imgaeblock'>

            <div className="left-img">
            
            <div className="L-img1">
            {images[0].map(el => <AboutComp key={el.id} items={el}/>)}

            </div>

            <div className="L-img2">
            {images.map(el => <AboutComp key={el.id} items={el}/>)}

            </div>
            </div>

            <div className="right-numbers">

                <div className="aboutus">

            <div className="titles">
            <h5 className="titleabout">About Us</h5>
            <div className="yelow"></div>
            </div>

            <p className="welcom">Welcome to <span className='icon-utensils-3 font2'></span> Restoran</p>

            <div className="descript">
                <p className="desc">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                <p className="desc">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            
            </div>

            <div className="fornumber">
                <div className="leftnumb">
                    <p className="numbers">15</p>
                    <div className="foryears">
                        <p className="fors">Years of</p>
                        <p className="for">EXPERIENCE</p>
                    </div>
                </div>
                <div className="leftnumb">
                <p className="numbers">50</p>
                <div className="foryears">
                <p className="fors">Popular</p>
                <p className="for">MASTER CHEFS</p>
                </div>
                </div>

                
            </div>
            <button className="read">READ MORE</button>
                

                </div>

            </div>
            
            

        </div>
    )
}


export default About