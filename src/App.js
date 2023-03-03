import logo from "./logo.svg";
import "./App.css";
import Boxer from "./components/Boxer";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Grid from "./components/Grid";
import Button from "./components/Button";
import {
  VRButton,
  ARButton,
  XR,
  Controllers,
  Hands,
  VRCanvas,
  Interactive,
} from "@react-three/xr";
import React, { useState, useEffect, useRef } from "react";
import {
  OrbitControls,
  Box,
  useGLTF,
  Text,
  Text3D,
  Stars,
  ScrollControls,
  Scroll,
  useScroll,
  PerspectiveCamera,
} from "@react-three/drei";
import Rimlight from "./components/Lighting/Rimlight"
import KeyLight from "./components/Lighting/KeyLight"
import FillLight from "./components/Lighting/FillLight";
import Back from "./components/Walls/Back"
import Right from "./components/Walls/Right"



function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { height, width } = useWindowDimensions();
  let heightMultiple = width *.001
  console.log(heightMultiple,"height multiple")
  const Controls = ({dynamic}) => {
    
    useThree(({ camera }) => {
      camera.position.y = 1.5 ;
      camera.position.x = 0  ;
      camera.position.z = 1 +dynamic ;
      camera.lookAt(0, 1, -15);
      console.log(camera, "the camera");
    });
    return null;
  };
  console.log(width,"the width")
  // function TheCam() {
  //   const { camera } = useThree();
  //   console.log(camera.rotateX, "camera");

  //   camera.rotateX = 20;
  // }

 
  function GroundPlane() {
    return (
      <mesh receiveShadow rotation-x={Math.PI * 1.5} position={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[10, 10]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }



  return (
    <div className="App">
      
      <VRButton />
    
      <Canvas>
        <Back/>
        <Right/>
    <Rimlight/> 
    <KeyLight/>
    <FillLight/>
        <Controls dynamic={heightMultiple} />
        {/* <TheCam /> */}
        {/* <Canvas camera={{ position: [0, 5, 0], rotation: [30, 0, 0] }}>  */}
        <Grid size={10} />
        {/* <OrbitControls /> */}
        <XR>
          <Button position={[3, 1, -3]} />
          <Controllers />

          <ScrollControls horizontal={true} pages={3} damping={0.1}>
            <Scroll>
              <Boxer position={[0, 1, -3]} />
            </Scroll>
          </ScrollControls>

    
          <GroundPlane />
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
