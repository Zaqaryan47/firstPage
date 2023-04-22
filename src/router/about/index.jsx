import About from "../../pages/components/About"
import Team from "../../pages/components/OurTeam"
import './style.scss'



const Aboutis = ()=>(
    <div>
        <div className="L-blocks">
            <h1 className="title2">About Us</h1>
        </div>

        <About/>
        <Team/>

    </div>
)

export default Aboutis