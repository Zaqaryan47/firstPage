import { NavLink } from 'react-router-dom'
import './style.scss'


const Webheader = () => {


    return (

        <div className='L-header'>
            <div className="header">
                    <div className="left">
                    <i className="icon-utensils-3 title"></i>
                    <p className="title">Restoran</p>
                    </div>
                    <div className="right">
                        <p className="btn"><NavLink className='btn' to="/home">HOME</NavLink> </p>
                        <p className="btn"><NavLink className='btn' to="/about">ABOUT</NavLink></p>
                        <p className="btn"><NavLink className='btn' to="/service">SERVICE</NavLink></p>
                        <p className="btn"><NavLink className='btn' to="/menu">MENU</NavLink></p>
                        <select className="btn opti">
                            <option className='opti'><NavLink className='btn' to="/booking">BOOKING</NavLink></option>
                            <option className='opti' ><NavLink className='btn' to="/ourteam">OUR TEAM</NavLink></option>
                            <option className='opti' ><NavLink className='btn' to="/testimonial">TESTIMONIAL</NavLink></option>
                        </select>
                        <p className="btn"><NavLink className='btn' to="/contact">CONTACT</NavLink></p>
                        <button className="button">BOOK A TABLE</button>
                    </div>
                    
                </div>
            
     
        </div>
    )
}
export default Webheader