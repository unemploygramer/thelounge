import logo from "./logo.svg";
import * as THREE from "three";
import "./App.css";
import Boxer from "./components/Boxer";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import Grid from "./components/Grid";
import Button from "./components/Button";
import {Room} from "./components/Room"
import Title from "./components/Title"
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
import BackLight from "./components/Lighting/BackLight";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import tits from "./tits.jpg";
import LeftButton from "./components/LeftButton";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { extend } from '@react-three/fiber'
import myFont from "./fonts/optimer_bold.typeface.json"
import urFont from "./fonts/Box.otf"
import TvLabel from "./components/TvLabel";
import TvSpring from "./components/TvSpring";
import { TvVideo } from "./components/TvVideo";
import MainMenu from "./components/MainMenu"

// import myFont from '../relative_path'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const data = [
  { id: 1, name: "ffff", link: "https://cdni.pornpics.com/1280/1/356/81420904/81420904_014_ed62.jpg" },
  { id: 2, name: "aaaa", link: "https://cdni.pornpics.com/1280/1/91/94355083/94355083_009_5529.jpg" },
  { id: 3, name: "zzzz", link: "https://cdni.pornpics.com/1280/7/44/87193693/87193693_162_22bb.jpg" },
  { id: 3, name: "gggg", link: "https://cdni.pornpics.com/1280/7/600/15980271/15980271_057_205a.jpg" },
  { id: 4, name: "llll", link: "https://cdni.pornpics.com/1280/7/107/79912458/79912458_018_5b3e.jpg" },
  // { id: 4, name: "gif", link: "https://cdn.sex.com/images/pinporn/2023/02/17/28909840.gif?width=620" },
];
// const data = [
//   { id: 1, name: "ffff", link: "https://www.skatedeluxe.com/blog/wp-content/uploads/2016/09/trick-tip-fs-tailslide-9.jpg" },
//   { id: 2, name: "aaaa", link: "https://www.skatedeluxe.com/blog/wp-content/uploads/2016/09/trick-tip-fs-tailslide-9.jpg" },
//   { id: 3, name: "zzzz", link: "https://www.skatedeluxe.com/blog/wp-content/uploads/2016/09/trick-tip-fs-tailslide-9.jpg" },
//   { id: 3, name: "gggg", link: "https://www.skatedeluxe.com/blog/wp-content/uploads/2016/09/trick-tip-fs-tailslide-9.jpg" },
//   { id: 4, name: "llll", link: "https://www.skatedeluxe.com/blog/wp-content/uploads/2016/09/trick-tip-fs-tailslide-9.jpg" },
// ];

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
  const [tvAnimation, setTvAnimation] = useState(-1);
  const { height, width } = useWindowDimensions();
  const [movement, setMovement] = useState(0)

  console.log(tvAnimation,"tvAnimation")
  let CameraZ;

  if (width <= 600) {
    CameraZ = 5.5;
  } else if (width > 600 && width <= 900) {
    CameraZ = 1.5;
  } else if (width > 900 && width < 1200) {
    CameraZ = 1;
  } else {
    CameraZ = 0.8;
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

  extend({ TextGeometry })

//  function Text() {
// const font = new FontLoader().parse(myFont);

// return(
// <mesh rotation-x={Math.PI * -.1}position={[-1,-.7,-3.4]}>
//     <textGeometry args={['ass', {font, size:.8, height: 1}]}/>
//     <meshLambertMaterial attach='material' color={'gold'}/>
// </mesh>
// )
//  }


  const MoveTvForward = () => {
    console.log(tvAnimation,"move tv forward");
    setTvAnimation(tvAnimation + 1);
  };
  const MoveTvBackward = () => {
    console.log(tvAnimation,"move tv forward");
    setTvAnimation(tvAnimation - 1);
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
      "https://www.skatedeluxe.com/blog/wp-content/uploads/2016/09/trick-tip-fs-tailslide-9.jpg"
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
        {/* <Back /> */}
        {/* <Right />
        <Left /> */}
//working tv sliders
        {/* <TV1 MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} />
        <TV imgLink="https://cdni.pornpics.com/1280/1/306/80647930/80647930_004_e3b4.jpg" MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} /> */}
        <Rimlight />
        <KeyLight />
        <FillLight />
        <BackLight/>
<Room/>

       {/* {data.map((e, key)=> {

        let startLocation = key-3 
console.log(key)
return <TV words={e.name} startNumber={startLocation} imgLink={e.link} MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} /> 
       })} */}
       {/* {data.map((e, key)=> {

        let startLocation = key-3 
console.log(key)
return <TV words={e.name} startNumber={startLocation} imgLink={e.link} MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} /> 
       })} */}
        {/* <Image /> */}
        {/* <TV imgLink="https://cdni.pornpics.com/1280/1/74/27338545/27338545_002_9883.jpg" MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} />  */}
        <NarrowLight />
        <Controls dynamic={heightMultiple} />
        {/* <TheCam /> */}
        {/* <Canvas camera={{ position: [0, 5, 0], rotation: [30, 0, 0] }}>  */}
        {/* <Grid size={10} /> */}
        {/* <OrbitControls /> */}
       {/* {data.map((e, key)=> {

        let startLocation = key-1
return <TvSpring  movement={movement} setMovement={setMovement} words={e.name} startNumber={startLocation} imgLink={e.link}  /> 
       })}  */}
        <XR>
          {/* <TvVideo/> */}
          {/* <LeftButton movement={movement} setMovement={setMovement} MoveTvBackward={MoveTvBackward}/>
          <RightButton movement={movement} setMovement={setMovement} MoveTvForward={MoveTvForward} clicker={MoveTvForward} /> */}
          <Title font={urFont} words="The Title"/>
          <Controllers />
          {/* <Button position={[3, 1, -3]} />
          <ScrollControls horizontal={true} pages={3} damping={0.1}>
            <Scroll>
              <Boxer position={[0, 1, -3]} />
            </Scroll>
          </ScrollControls> */}
<MainMenu font={urFont}/>

          {/* <GroundPlane /> */}
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
