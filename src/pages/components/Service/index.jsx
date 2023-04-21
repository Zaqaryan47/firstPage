import Copmhome from './service-component';
import './style.scss';
import { homeutil } from './utils';

const Service =()=>{
    return(
<div>
<div className="our-menu">

{homeutil.map(el => <Copmhome key={el.id} item={el} />)}

</div> 


</div>
    )
}
export default Service