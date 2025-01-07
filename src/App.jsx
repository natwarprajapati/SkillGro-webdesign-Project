import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Layout } from './Layout';
// import { Home } from './Pages/Home';
import { Dashboard } from './Components/Dashboard/Index';


function App() {
  useEffect(() => {
    AOS.init({
      // duration: 2000,  // Animation duration (in ms)
      // delay: 200,      // Delay before the animation starts (in ms)
    });
  }, []);
  return (
    <Layout>
      {/* <Home/> */}
      <Dashboard/>
    </Layout>
    )
}

export default App