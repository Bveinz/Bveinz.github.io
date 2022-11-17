
import './App.css';

import Navbar from './components/Public/Navbar'
import Home from './components/Public/Home';
import {BrowserRouter, Routes, Route, HashRouter, Link} from 'react-router-dom';
import {CONTACTO} from './config/Routes'
import Contacto from './components/Public/views/Contacto'
import Nosotros from './components/Public/views/Nosotros';
import Servicios from './components/Public/views/Servicios';
import SectionNucleoIcons from './components/Public/Components/NucleoIcons';



function App() {
  return (
    <>
  
        <HashRouter>
          <Navbar></Navbar>
            <SectionNucleoIcons></SectionNucleoIcons>
            <Routes>
                <Route index element = {<Home/>} />
                <Route  path='/contacto' element = {<Contacto/>}/>
                <Route  path='/servicios' element = {<Servicios/>}/>
                <Route  path='/nosotros' element = {<Nosotros/>}/>
              </Routes>
        </HashRouter>
        
    
    
    {/* <BrowserRouter>  
      <Navbar></Navbar>
        <Routes>
          <Route index element = {<Home/>} exact/>
          <Route  path={CONTACTO} element = {<Contacto/>} exact/>
        </Routes>
    </BrowserRouter>  */}
    </>
  );
}

export default App;



