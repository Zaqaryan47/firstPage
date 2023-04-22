import { NavLink } from 'react-router-dom'
import './style.scss'
import { useState } from 'react'


const Webheader = () => {

    const [tabindex, setTabIndex]= useState(1)
     
    function tab1(){
        setTabIndex(1)
    }
    function tab2(){
        setTabIndex(2)
    }
    function tab3(){
        setTabIndex(3)
    }
    function tab4(){
        setTabIndex(4)
    }
    function tab5(){
        setTabIndex(5)
    }
    function tab6(){
        setTabIndex(6)
    }
    function tab7(){
        setTabIndex(7)
    }
    function tab8(){
        setTabIndex(8)
    }



    return (

        <div className='L-header'>
            <div className="header">
                    <div className="left">
                    <i className="icon-utensils-3 title"></i>
                    <p className="title">Restoran</p>
                    </div>
                    <div className="right">
                        <p onClick={tab1} className="btn"><NavLink className={`btn ${tabindex == 1? 'active1-btn':''}`} to="/home">HOME</NavLink> </p>
                        <p onClick={tab2} className="btn"><NavLink className={`btn ${tabindex == 2? 'active1-btn':''}`} to="/about">ABOUT</NavLink></p>
                        <p onClick={tab3} className="btn"><NavLink className={`btn ${tabindex == 3? 'active1-btn':''}`} to="/service">SERVICE</NavLink></p>
                        <p onClick={tab4} className="btn"><NavLink className={`btn ${tabindex == 4? 'active1-btn':''}`} to="/menu">MENU</NavLink></p>
                        <p className="btn btn-hover">
                            HOVER ME
                        <div className="hiddens">
                        <p onClick={tab5} className='btn'><NavLink className={`btn ${tabindex == 5? 'active1-btn':''}`} to="/booking">BOOKING</NavLink></p>
                        <p onClick={tab6} className='btn'><NavLink className={`btn ${tabindex == 6? 'active1-btn':''}`} to="/ourteam">OUR TEAM</NavLink></p>
                        <p onClick={tab7} className='btn'><NavLink className={`btn ${tabindex == 7? 'active1-btn':''}`} to="/testimonial">TESTIMONIAL</NavLink></p>
                        </div>
                        </p>
                       
                        <p onClick={tab8} className="btn"><NavLink className={`btn ${tabindex == 8? 'active1-btn':''}`} to="/contact">CONTACT</NavLink></p>
                        <button className="button">BOOK A TABLE</button>
                    </div>
                    
                </div>
            
     
        </div>
    )
}
export default Webheader