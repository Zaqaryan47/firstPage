import './assets/style/font/style.css'
import './assets/icon/style.css'
import Routor from './router';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



function App() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="App">
       

      
          <Routor/>
      
    </div>
  );
}

export default App