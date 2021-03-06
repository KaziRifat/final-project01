import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';
import BestOffer from './Components/BestOffer';
import About from './Components/About';
import Reservation from './Components/Reservation';
//import Menu from './Components/Menu';<Menu/>
import Contact from './Components/Contact';


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Searchbar/>
      <BestOffer/>
      <About/>
      <Reservation/>
      
      <Contact/>
    </div>
  );
}

export default App;
