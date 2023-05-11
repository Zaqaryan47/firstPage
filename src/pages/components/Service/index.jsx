import Copmhome from './service-component';
import './style.scss';
import { homeutil } from './utils';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Service =()=>{
    return(
<div data-aos="flip-up">


<div className="our-menu">

{homeutil.map(el => <Copmhome key={el.id} item={el} />)}

</div> 







</div>
    )
}
export default Service