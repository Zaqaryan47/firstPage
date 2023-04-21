import Clientcomp from './client-components';
import './style.scss';
import { client } from './util';



const Testi =()=>{


    return(
        <div className='L-testi'>
             <div className="titlesss">
                <p className="gits"></p>
                <p className="text">Testimonial</p>
                <p className="gits"></p>
            </div>
            <di className="titles2">
                <p className="text2">Our Clients Say!!!</p>
            </di>



        <div className="clientbig">
            {client.map(el => <Clientcomp key={el.id} iteem={el}/>)}
            
         
        </div>

            

        </div>
    )
}

export default Testi