import Clientcomp from './client-components';
import './style.scss';
import { client } from './util';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";



const Testi = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true, 
        autoplaySpeed: 2000,
      };

    return (
        <div data-aos="zoom-in" className='L-testi'>

                <div className="titlesss">
                    <p className="gits"></p>
                    <p className="text">Testimonial</p>
                    <p className="gits"></p>
                </div>
                <di className="titles2">
                    <p className="text2">Our Clients Say!!!</p>
                </di>




                <div className="margintop">
                <Slider {...settings}>

                {client.map(el => <Clientcomp key={el.id} iteem={el} />)}
                </Slider>

                </div>
           
               
           



        </div>
    )


    
}

export default Testi

