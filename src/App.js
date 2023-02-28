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

const Controls = () => {
  useThree(({ camera }) => {
    camera.position.y = 1.5;
    camera.position.x = 0;
    camera.position.z = 1;
    camera.lookAt(0, 1, -15);
    console.log(camera, "the camera");
  });
  return null;
};

function App() {
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
        <Controls />
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

          <spotLight
            color="#ffffff"
            position-y={2}
            position-x={0}
            position-z={-5}
            intensity={1}
            castShadow
            distance={6}
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
          <GroundPlane />
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
