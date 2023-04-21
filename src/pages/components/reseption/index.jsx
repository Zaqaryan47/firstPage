import './style.scss';

import imgvideo from '../../../assets/img/video.jpg'



const Reseption = ()=>{
    return(
        <div className='L-reseption'>
            <div className="left">
                <img className='imgvid' src={imgvideo} alt="" />

            </div>
            <div className="right">
                <div className="texts">
                    <p className="name">Reservation</p>
                    <p className="gits"/>
                </div>
                <p className="descript">Book A Table Online</p>

                <div className="inputes">
                    <div className="input-top">
                        <input className='inp1' type="text" name="Name" id="1" placeholder='Your Name' />
                        <input className='inp1' type="email" name="email" id="2" placeholder='Your Email' />
                    </div>
                    <div className="input-bottom">
                        <input className='inp1 data' type="date" name="dta" id="3" placeholder='Date & Time' />
                        <select className='select1'  id="select">
                            <option value="1">People 1</option>
                            <option value="2">People 2</option>
                            <option value="3">People 3</option>

                        </select>
                    </div>

                    <input className='ourtext' type="text" placeholder='Special Request' />

                    <button className="book">BOOK NOW</button>

                </div>
            </div>

        </div>
    )
}

export default Reseption