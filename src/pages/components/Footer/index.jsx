import { useState } from 'react';
import useValidation from '../../../hook/useValidation';
import './style.scss';



const Footer = () => {

    const {item} = useValidation();
    const [mail , setMail] = useState();



    return (
        <div className='L-footer'>
            <div className="futerSelect">
                <div className="names">
                    <p className="name">Company</p>
                    <div className="gits" />
                </div>
                <div className="navbar">
                    <p className="select">About Us</p>
                    <p className="select">Contact Us</p>
                    <p className="select">Reservation</p>
                    <p className="select">Privacy Policy</p>
                    <p className="select">Terms & Condition</p>
                </div>
            </div>
            <div className="futerSelect">
                <div className="names">
                    <p className="name">Contact</p>
                    <div className="gits" />
                </div>

                <p className="contact icon-location">
                    <span className="selector">123 Street, New York, USA</span>
                </p>
                <p className="contact icon-phone">
                    <span className="selector">+012 345 67890</span>
                </p>
                <p className="contact icon-envelop">
                    <span className="selector">info@example.com</span>
                </p>

                <div className="icons">
                    <p className="icon ">
                        <p className="colorch icon-twitter"></p>
                    </p>
                    <p className="icon">
                        <p className="colorch icon-facebook"></p>
                    </p>
                    <p className="icon">
                        <p className="colorch icon-youtube"></p>
                    </p>
                    <p className="icon">
                        <p className="colorch icon-linkedin2"></p>
                    </p>

                </div>

            </div>
            <div className="futerSelect">
                <div className="names">
                    <p className="name">Opening</p>
                    <div className="gits" />
                </div>

                <di className="top">
                    <p className="open">Monday - Saturday</p>
                    <p className="open">09AM - 09PM</p>
                </di>


                <div className="bottom">
                    <p className="open">Sunday</p>
                    <p className="open">10AM - 08PM</p>
                </div>

            </div>
            <div className="futerSelect">
                <div className="names">
                    <p className="name">Newsletter</p>
                    <div className="gits" />
                </div>

                <p className="cont">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

                <div className="buttons">
                    <input style={{border: '3px solid ' + item.email}}  className='inp' placeholder='Your Email' type="email" onChange={(e) =>{
                       setMail(e.target.value) 
                    }} />
                    
                    <button onClick={()=>{
                        item.func(mail,)
                        
                    }} className="serch">SIGNUP</button>
                </div>
            </div>


        </div>
    )
}


export default Footer