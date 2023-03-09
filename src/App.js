import logo from "./logo.svg";
import * as THREE from "three";
import "./App.css";
import Boxer from "./components/Boxer";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
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
  useTexture,
  PerspectiveCamera,
} from "@react-three/drei";
import Rimlight from "./components/Lighting/Rimlight";
import KeyLight from "./components/Lighting/KeyLight";
import FillLight from "./components/Lighting/FillLight";
import Back from "./components/Walls/Back";
import Right from "./components/Walls/Right";
import Left from "./components/Walls/Left";
import TV from "./components/TV";
import TV1 from "./components/TV1";
import NarrowLight from "./components/Lighting/NarrowLight";
import RightButton from "./components/RightButton";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import tits from "./tits.jpg";

// import myFont from '../relative_path'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const [tvAnimation, setTvAnimation] = useState(1);
  const { height, width } = useWindowDimensions();
  let CameraZ;

  if (width <= 600) {
    CameraZ = 5.5;
  } else if (width > 600 && width <= 900) {
    CameraZ = 1.5;
  } else if (width > 900 && width < 1200) {
    CameraZ = 1;
  } else {
    CameraZ = 0;
  }

  let heightMultiple = width * 0.001;

  const Controls = ({ dynamic }) => {
    useThree(({ camera }) => {
      camera.position.y = 1.5;
      camera.position.x = 0;
      camera.position.z = CameraZ;
      camera.lookAt(-0.2, 3, -15);
      // console.log(camera, "the camera");
    });
    return null;
  };
  // console.log(width,"the width")
  // function TheCam() {
  //   const { camera } = useThree();
  //   console.log(camera.rotateX, "camera");

  //   camera.rotateX = 20;
  // }

  const MoveTvForward = () => {
    console.log("move tv forward");
    setTvAnimation(tvAnimation + 1);
  };
  function GroundPlane() {
    return (
      <mesh receiveShadow rotation-x={Math.PI * 1.5} position={[0, 0, -4]}>
        <planeBufferGeometry attach="geometry" args={[10, 20]} />
        <meshStandardMaterial attach="material" color="pink" />
      </mesh>
    );
  }
  function Image() {
    // const texture = useLoader(THREE.TextureLoader, tits);
    const texture = useTexture(
      "https://cdni.pornpics.com/1280/1/306/80647930/80647930_004_e3b4.jpg"
    );
    return (
      <mesh position={[0, 2, -3.5]}>
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  }

  return (
    <div className="App">
      <VRButton />
      <Canvas colorManagement shadowMap>
        <Stars />
        {/* <ambientLight/> */}

        <Back />
        {/* <Right />
        <Left /> */}

        <TV1 MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} />
        <TV MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} />
        <Rimlight />
        <KeyLight />
        <FillLight />
        {/* <Image /> */}
        <NarrowLight />
        <Controls dynamic={heightMultiple} />
        {/* <TheCam /> */}
        {/* <Canvas camera={{ position: [0, 5, 0], rotation: [30, 0, 0] }}>  */}
        {/* <Grid size={10} /> */}
        {/* <OrbitControls /> */}
        <XR>
          <RightButton MoveTvForward={MoveTvForward} clicker={MoveTvForward} />
          <Controllers />
          {/* <Button position={[3, 1, -3]} />
          <ScrollControls horizontal={true} pages={3} damping={0.1}>
            <Scroll>
              <Boxer position={[0, 1, -3]} />
            </Scroll>
          </ScrollControls> */}

          <GroundPlane />
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
