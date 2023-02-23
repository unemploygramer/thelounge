import logo from './logo.svg';
import './App.css';
import Boxer from "./components/Boxer"
import { Canvas } from '@react-three/fiber'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import React, {useState} from "react"
import { OrbitControls, Box , useGLTF, Text, Text3D, Stars, ScrollControls, Scroll, useScroll} from "@react-three/drei";
function App() {
const [left, setLeft] = useState(false)


  return (
    <div className="App">
 <Canvas>
<XR>
   <ScrollControls horizontal={true} pages={3} damping={0.1}>


 <Scroll    >

<Boxer/> 
 </Scroll>
</ScrollControls>

  <spotLight
      color="#ffffff"
      position-y={3}
      intensity={1}
      castShadow
      distance={6}
      angle={Math.PI * 0.2}
      // shadow-mapSize-width={256}
      // shadow-mapSize-height={256}
      shadow-mapSize={[1024, 1024]}
    />
      <spotLight
   
      position-y={3}
      position-z={11}
      intensity={1}
      castShadow
      distance={6}
      angle={Math.PI * 1.4}
      // shadow-mapSize-width={256}
      // shadow-mapSize-height={256}
      shadow-mapSize={[1024, 1024]}
    />
</XR>
 </Canvas>
    </div>
  );
}

export default App;
