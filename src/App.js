import logo from "./logo.svg";
import * as THREE from "three";
import "./App.css";
import Boxer from "./components/Boxer";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import Grid from "./components/Grid";
import Button from "./components/Button";
import { Room } from "./components/Room";
import Title from "./components/Title";
import SpotLazer from "./components/Lighting/SpotLazer";
import ImageSlider from "./components/ImageSlider";
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
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import myFont from "./components/fonts/optimer_bold.typeface.json";
// import urFont from "./fonts/Box.otf";
import urFont from "./components/fonts/Box.otf";
import TvLabel from "./components/TvLabel";
import TvSpring from "./components/TvSpring";
import { TvVideo } from "./components/TvVideo";
import MainMenu from "./components/MainMenu";
import { GameRoom } from "./components/GamerRoom.jsx";
import { WhiteRoom } from "./components/WhiteRoom";

// import myFont from '../relative_path'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const colorScheme = {
  primary: "red",
  secondary: "black",
  third: "hotpink",
};

// const data = [
//   {
//     id: 1,
//     name: "Bee Bop",
//     link: "https://mcdn.vrporn.com/files/20230402073558/Cowboy-Bebop-Feye-Valentine-A-XXX-Parody-Violet-Starr-VRCosplayX-vr-porn-video-640x364.jpg",
//     type: "pic",
//     bannerLink: "https://vrporn.com/cowboy-bebop-feye-valentine-a-xxx-parody/",
//     performers:[{name:"violet Star", socials:{twitter: "https://twitter.com/MissVioletStarr" ,WebSite:"https://linktr.ee/missvioletstarr"}, profilePic: "https://mcdn.vrporn.com/files/20200709075842/Violet-Starr-profile.jpg"}]
//   },
//   {
//     id: 1,
//     name: "the last of us",
//     link: "https://mcdn.vrporn.com/files/20200624180852/The-Last-Of-Us-A-XXX-Parody-VRCosplayX-Kira-Noir-Hazel-Moore-vr-porn-video-vrporn.com-virtual-reality7-640x364.jpg",
//     type:"pic",
//     bannerLink: "https://vrporn.com/the-last-of-us-a-xxx-parody/",
//     performers:[{name:"violet Star", socials:{twitter: "https://twitter.com/MissVioletStarr" ,WebSite:"https://linktr.ee/missvioletstarr"}, profilePic: "https://mcdn.vrporn.com/files/20200709075842/Violet-Starr-profile.jpg"}]
//   },

// ];
const data = [
  {
    id: 1,
    name: "Bee Bop",
    link: "https://mcdn.vrporn.com/files/20230402073558/Cowboy-Bebop-Feye-Valentine-A-XXX-Parody-Violet-Starr-VRCosplayX-vr-porn-video-640x364.jpg",
    type: "pic",
    bannerLink: "https://vrporn.com/cowboy-bebop-feye-valentine-a-xxx-parody/",
    performers:[{name:"violet Star", socials:{twitter: "https://twitter.com/MissVioletStarr" ,WebSite:"https://linktr.ee/missvioletstarr"}, profilePic: "https://mcdn.vrporn.com/files/20200709075842/Violet-Starr-profile.jpg"},{name:"violet Star", socials:{twitter: "https://twitter.com/MissVioletStarr" ,WebSite:"https://linktr.ee/missvioletstarr"}, profilePic: "https://mcdn.vrporn.com/files/20200709075842/Violet-Starr-profile.jpg"}]

  },
  {
    id: 1,
    name: "the last of us",
    link: "https://mcdn.vrporn.com/files/20200624180852/The-Last-Of-Us-A-XXX-Parody-VRCosplayX-Kira-Noir-Hazel-Moore-vr-porn-video-vrporn.com-virtual-reality7-640x364.jpg",
    type:"pic",
    bannerLink: "https://vrporn.com/the-last-of-us-a-xxx-parody/",
    performers:[{name:"violet Star", socials:{twitter: "https://twitter.com/MissVioletStarr" ,WebSite:"https://linktr.ee/missvioletstarr"}, profilePic: "https://mcdn.vrporn.com/files/20200709075842/Violet-Starr-profile.jpg"}]
  },
  {
    id: 1,
    name: "super girl",
    link: "https://mcdn.vrporn.com/files/20221226091756/Supergirl-A-XXX-Parody-Sybil-A-VRCosplayX-vr-porn-video-640x364.jpg",
    type: "pic",
    bannerLink: "https://vrporn.com/supergirl-a-xxx-parody/",
    performers:[{name:"violet Star", socials:{twitter: "https://twitter.com/MissVioletStarr" ,WebSite:"https://linktr.ee/missvioletstarr"}, profilePic: "https://mcdn.vrporn.com/files/20200709075842/Violet-Starr-profile.jpg"}]
  },
  {
    id: 1,
    name: "sweet genie",
    link: "https://mcdn.vrporn.com/files/20220108073103/Sweet-Genie-Laney-Grey-VRConk-vr-porn-video-640x364.jpg",
    type: "video",
    bannerLink: "https://vrporn.com/sweet-genie/",
    performers:[{name:"violet Star", socials:{twitter: "https://twitter.com/MissVioletStarr" ,WebSite:"https://linktr.ee/missvioletstarr"}, profilePic: "https://mcdn.vrporn.com/files/20200709075842/Violet-Starr-profile.jpg"}]
  },
  {
    id: 1,
    name: "closes encounters",
    link: "https://mcdn.vrporn.com/files/20210116231509/Close-Encumters-Of-The-Third-Kind-Avery-Black-VRConk-vr-porn-video-vrporn.com-virtual-reality.jpg",
    type: "video",
    bannerLink: "https://vrporn.com/close-encumters-of-the-third-kind/",
    performers:[{name:"violet Star", socials:{twitter: "https://twitter.com/MissVioletStarr" ,WebSite:"https://linktr.ee/missvioletstarr"}, profilePic: "https://mcdn.vrporn.com/files/20200709075842/Violet-Starr-profile.jpg"}]
  },
  {
    id: 1,
    name: "book ends",
    link: "https://mcdn.vrporn.com/files/20210828221536/Book-Ends-WANKZVR-Kenzie-Madison-Daphne-Dare-vr-porn-video-640x364.jpeg",
    type: "video",
    bannerLink: "https://vrporn.com/book-ends/",
    performers:[{name:"violet Star", socials:{twitter: "https://twitter.com/MissVioletStarr" ,WebSite:"https://linktr.ee/missvioletstarr"}, profilePic: "https://mcdn.vrporn.com/files/20200709075842/Violet-Starr-profile.jpg"}]
  },
];

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
  const { height, width } = useWindowDimensions();
  const [movement, setMovement] = useState(0);
  const [page, setPage] = useState("MainMenu");

  let CameraZ;
  let cameraY;

  if (width <= 600) {
    CameraZ = 5.5;
    cameraY = 1;
  } else if (width > 600 && width <= 900) {
    CameraZ = 5.5;
    cameraY = 0.8;
  } else if (width > 900 && width < 1200) {
    CameraZ = 5.5;
    cameraY = 0.7;
  } else {
    CameraZ = 1;
    cameraY = 1.9;
  }

  let heightMultiple = width * 0.001;

  const Controls = ({ dynamic }) => {
    useThree(({ camera }) => {
      camera.position.y = cameraY;
      camera.position.x = 0;
      camera.position.z = CameraZ;
      camera.lookAt(0, 1.8, -5);
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

  extend({ TextGeometry });

  //  function Text() {
  // const font = new FontLoader().parse(myFont);

  // return(
  // <mesh rotation-x={Math.PI * -.1}position={[-1,-.7,-3.4]}>
  //     <textGeometry args={['ass', {font, size:.8, height: 1}]}/>
  //     <meshLambertMaterial attach='material' color={'gold'}/>
  // </mesh>
  // )
  //  }

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
      <Canvas>
        <Stars />
        {/* <ambientLight/> */}
        {/* <Back /> */}
        {/* <Right />
        <Left /> */}
        //working tv sliders
        {/* <TV1 MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} />
        <TV imgLink="https://cdni.pornpics.com/1280/1/306/80647930/80647930_004_e3b4.jpg" MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} /> */}
        {/* <Rimlight /> */}
        {/* <KeyLight /> */}
        <FillLight />
        <BackLight />
        <SpotLazer />
        {/* <Room /> */}
        {/* <Image /> */}
        {/* <TV imgLink="https://cdni.pornpics.com/1280/1/74/27338545/27338545_002_9883.jpg" MoveTvForward={MoveTvForward} tvAnimation={tvAnimation} />  */}
        <NarrowLight />
        <Controls dynamic={heightMultiple} />
        {/* <TheCam /> */}
        {/* <Canvas camera={{ position: [0, 5, 0], rotation: [30, 0, 0] }}>  */}
        {/* <Grid size={10} /> */}
        {/* <OrbitControls /> */}
        {/* {data.map((e, key) => {
          let startLocation = key - 1;
          return (
            <TvSpring
              movement={movement}
              setMovement={setMovement}
              words={e.name}
              startNumber={startLocation}
              imgLink={e.link}
            /> 
          );
        })} */}
        <WhiteRoom />
        <XR>
          {/* <TvVideo/> */}
          {/* {/* <LeftButton movement={movement} setMovement={setMovement} MoveTvBackward={MoveTvBackward}/> */}
          <RightButton
            colorScheme={colorScheme}
            movement={movement}
            setMovement={setMovement}
            data={data}
            page={page}
          />{" "}
          */}
          <LeftButton
            colorScheme={colorScheme}
            data={data}
            movement={movement}
            setMovement={setMovement}
            page={page}
          />
          <ImageSlider
            colorScheme={colorScheme}
            movement={movement}
            setMovement={setMovement}
            page={page}
            setPage={setPage}
            data={data}
          />
          {/* <GameRoom /> */}
          <Title
            position={[0, 6.12, -9]}
            opacity={1}
            font={urFont}
            words="The Title"
            setPage={setPage}
            page={page}
            colorScheme={colorScheme}
          />
          {/* <Title font={urFont} words="The Title" /> */}
          <Controllers />
          {/* <Button position={[3, 1, -3]} />
          <ScrollControls horizontal={true} pages={3} damping={0.1}>
            <Scroll>
              <Boxer position={[0, 1, -3]} />
            </Scroll>
          </ScrollControls> */}
          <Controllers
            /** Optional material props to pass to controllers' ray indicators */
            rayMaterial={{ color: colorScheme.primary }}
            /** Whether to hide controllers' rays on blur. Default is `false` */
            hideRaysOnBlur={false}
          />
          <MainMenu
            colorScheme={colorScheme}
            page={page}
            setPage={setPage}
            font={urFont}
          />
          {/* <GroundPlane /> */}
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
