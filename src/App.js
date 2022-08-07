import React from 'react'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar';
import Food from './components/food/Food'

//Images 
import WvDonuts from './assets/WvDonuts.jpg'
import OneChocolateDnt from './assets/OneChocolateDnt.jpg'
import BrownDonuts from './assets/BrownDonuts.jpg'
/* import BlueDonuts from './assets/BlueDonuts.jpg'
import BlueWvDonuts from './assets/BlueWvDonuts.jpg'
import BoxDonuts from './assets/BoxDonuts.jpg'
import ChocolateDonuts from './assets/ChocolateDonuts.jpg'
import ChocolateDonuts1 from './assets/ChocolateDonuts1.jpg'
import DarkDonuts from './assets/DarkDonuts.jpg'
import GrColorDonuts from './assets/GrColorDonuts.jpg'
import GridChocolateDonuts from './assets/GridChocolateDonuts.jpg'
import GridDonuts from './assets/GridDonuts.jpg'
import LightDonuts from './assets/LightDonuts.jpg'
import PinkDonuts from './assets/PinkDonuts.jpg'
import SimpleDonuts from './assets/SimpleDonuts.jpg'
import VerDonut from './assets/VerDonut.jpg'
import VrColorDonuts from './assets/VrColorDonuts.jpg'
import WhiteDonuts from './assets/WhiteDonuts.jpg' */


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Food bgImgLeft={WvDonuts} bgImgTop={OneChocolateDnt} bgImgBottom={BrownDonuts}/>
    </>
  );
}

export default App;
