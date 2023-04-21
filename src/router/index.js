import ResponsiveView from "../responsiveView"
import Mobileview from '../pages/mobileWiev'
import Webview from '../pages/webView';



const Routor = ()=>{
    return(
        <div>
        <ResponsiveView mobileView={<Mobileview />} webView={<Webview />} />
        


        </div>
    )
}

export default Routor