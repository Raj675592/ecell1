import React from 'react'
import nocc from './noccarc.png'
import infosys from './infosys.png'
import ixigo from './ixigo.png'
import giva from './giva.png'
import glance from './glance.png'
import safely from './safely.png'
import './index.css'

import './App.css'

function App() {
  return(
    <>
<div className="App-header">
<header className="App-header">
<h1>STARTUPS FROM IIT KANPUR</h1>
<h3>"Innovating the future — where billions of ideas converge under one roof to shape a new tomorrow."</h3>
</header>
</div>
<div className="startups">

  <a href="https://noccarc.com" className="startup">
   <img src={nocc} alt="Noccarc" />
    <h2>Noccarc</h2>
    <p>Developer of ventilators for respiratory care</p>
    <p>Founded in 2017</p>
  </a>
  <a href="https://www.infosys.com/" className="startup">
   <img src={infosys} alt="Infosys" />
    <h2>Infosys</h2>
    <p>Provider of digital marketing, data analytics, and IT suite services</p>
    <p>Founded in 1981</p>
  </a>
  <a href="https://www.ixigo.com/" className="startup">
   <img src={ixigo} alt="Noccarc" />
    <h2>Ixigo</h2>
    <p>AI-based online platform providing multiple travel services</p>
    <p>Founded in 2007</p>
  </a>
  <a href="https://www.giva.co/" className="startup">
   <img src={giva} alt="Noccarc" />
    <h2>GIVA</h2>
    <p>Internet first brand offering multi-category fast-fashion jewelry</p>
    <p>Founded in 2019</p>
  </a>
  <a href="https://glance.com/" className="startup">
   <img src={glance} alt="Noccarc" />
    <h2>glance</h2>
    <p>Provider of mobile lock screen content management & advertising solutions</p>
    <p>Founded in 2019</p>
  </a>
  <a href="https://www.safely-you.com/" className="startup">
   <img src={safely} alt="Noccarc" />
    <h2>SafelyYou</h2>
    <p>AI-based fall prevention technology for clinics</p>
    <p>Founded in 2014</p>
  </a>
  
 
</div>

    </>
  )
}

export default App;
