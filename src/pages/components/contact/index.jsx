import './style.scss';


const Contact = ()=>{
    return(
        <div>
            <div className="centers">
             <div className="titles">
             <div className="yelow"></div>
            <h5 className="titleabout">Contact Us</h5>
            <div className="yelow"></div>
            </div>

            <p className="welcom">Contact For Any Query</p>
            </div>

            <div className="infos">
            <div className="one">
                    <div className="cont">
                    <h5 className="titleabout">Booking</h5>
                    <div className="yelow"></div>
                    </div>
                <div className="inf">
                    <i className="icon-envelope icon"></i>
                    <p className="mail">book@example.com</p>
                </div>
                
                </div>
                <div className="one">
                    <div className="cont">
                    <h5 className="titleabout">General</h5>
                    <div className="yelow"></div>
                    </div>
                <div className="inf">
                    <i className="icon-envelope icon"></i>
                    <p className="mail">info@example.com</p>

                </div>
                
                </div>
                <div className="one">
                    <div className="cont">
                    <h5 className="titleabout">Technical</h5>
                    <div className="yelow"></div>
                    </div>
                <div className="inf">
                    <i className="icon-envelope icon"></i>
                    <p className="mail">tech@example.com</p>
                </div>
                
                </div>
            </div>

            <div className="contus">
                <div className="leftcont">
                <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97583.89596664987!2d44.40616631535756!3d40.15349240595285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc58a255ff1f%3A0xfcd6234a1b5dd3b7!2sRossia%20Mall!5e0!3m2!1sen!2sam!4v1681837085817!5m2!1sen!2sam" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="rightus">

                    <div className="topright">
                        <input placeholder='Your Name' className='inpt' type="text" />
                        <input placeholder='Your Email' className='inpt' type="text" />
                    </div>
                    <div className="bottomright">
                        <div className="col1">
                        <input placeholder='Subject' className='bottominp2' type="text" />

                        </div>
                        <input placeholder='Message' className='bottominp' type="text" />
                    </div>
                    <button className='send'>SEND MESSAGE</button>



                </div>
            </div>
        </div>
    )
}
export default Contact