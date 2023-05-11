import TeamComp from './Ourteamcomponent';
import './style.scss';
import { members } from './util';



const Team = ()=>{
    return(



        <div data-aos="zoom-in"  className='L-Teamblock'>

            <div className="titlesss">
                <p className="gits"></p>
                <p className="text">Team Members</p>
                <p className="gits"></p>
            </div>
            <div className="titles2">
                <p className="text2">Our Master Chefs</p>
            </div>
    
            

           
            <div className="memberss">
            {members.map(el => <TeamComp  key={el.id} itemis={el}/>)}
            </div>
            


        </div>


    )
}

export default Team