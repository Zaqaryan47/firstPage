import { NavLink } from 'react-router-dom'
import './style.scss'
import { useState } from 'react'


const Mobheader = () => {

    const [block,SetBlock] = useState(false)

    const kg47 = () => {
        SetBlock(!block)
        
        if(block == false){
            SetBlock('block')
           
        }else if(block == true){
            SetBlock('none')
           
        }
      }
      
    return (

        <div className='L-header'>
            <div className="header">
                    <div className="left">
                    <i className="icon-utensils-3 title6"></i>
                    <p className="title6">Restoran</p>
                    </div>

                    <div className="mobright">

                        <div onClick={kg47} className="hidden icon-bars"></div>
               
                    </div>
                    
                </div>
            
                        <div  style={{display:block}} className="headerbtn">
                        <p className="btn"><NavLink className='btn' to="/home">HOME</NavLink> </p>
                        <p className="btn"><NavLink className='btn' to="/about">ABOUT</NavLink></p>
                        <p className="btn"><NavLink className='btn' to="/service">SERVICE</NavLink></p>
                        <p className="btn"><NavLink className='btn' to="/menu">MENU</NavLink></p>
                        
                           
                        
                        <p className='btn'><NavLink className='btn' to="/booking">BOOKING</NavLink></p>
                        <p className='btn'><NavLink className='btn' to="/ourteam">OUR TEAM</NavLink></p>
                        <p className='btn'><NavLink className='btn' to="/testimonial">TESTIMONIAL</NavLink></p>
                        
                        
                        <p className="btn"><NavLink className='btn' to="/contact">CONTACT</NavLink></p>
                        <button className="button">BOOK A TABLE</button>
                        </div>
        </div>
    )
}
export default Mobheader