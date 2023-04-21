import About from "../../pages/components/About"
import Home from "../../pages/components/Home"
import Menu from "../../pages/components/Menu"
import Team from "../../pages/components/OurTeam"
import Service from "../../pages/components/Service"
import Reseption from "../../pages/components/reseption"
import Testi from "../../pages/components/testimonial"



const Homesrot =()=>{
    return(
        <div>
         <Home/>   
        <Service/>
        <About/>
        <Menu/>
        <Reseption/>
        <Team/>
        <Testi/>
        </div>
    )
}

export default Homesrot