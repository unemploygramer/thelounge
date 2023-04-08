import { Center, Html, Text, Text3D, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";
import { useSpring, animated } from "@react-spring/three";
import MenuItem from "../components/MenuItem";
import Title from "../components/Title";
import urFont from "../components/fonts/Box.otf";

function MainMenu({
  tvAnimation,
  MoveTvForward,
  imgLink,
  startNumber,
  words,
  movement,
  setMovement,
  font,
  page,
  setPage,
  colorScheme,
}) {
  //   const [imageProportion, setImageProportion]= useState(null)
  //   const STEP_DURATION = 500;
  //   const { carouselRotation } = useSpring({
  //     from: {
  //       carouselRotation: 0,
  //     },
  //     to: [
  //       {
  //         carouselRotation: -Math.PI / 2,
  //         delay: STEP_DURATION,
  //       },
  //       {
  //         carouselRotation: -Math.PI,
  //         delay: STEP_DURATION,
  //       },
  //       {
  //         carouselRotation: -1.5 * Math.PI,
  //         delay: STEP_DURATION,
  //       },
  //       {
  //         carouselRotation: -2 * Math.PI,
  //         delay: STEP_DURATION,
  //       },
  //     ],
  //     config: {
  //       mass: 5,
  //       tension: 400,
  //       friction: 50,
  //     },

  //     immediate: true,
  //   });
  //   const xMovement = ()=> {
  //     if(movement<startNumber) {
  //       return -15
  //     }
  //    else if(movement===startNumber) {
  //       return -8
  //     }
  //     else if(movement ==startNumber +1) {
  //       return 0
  //     } else if( movement==startNumber+2) {
  //       return 7.2
  //     } else {
  //       return 9
  //     }
  //   }
  //   const zMovement = ()=> {
  //     if(movement<startNumber) {
  //       return -3.5
  //     }
  //    else if(movement===startNumber) {
  //       return -3.5
  //     }
  //    else if(movement ==startNumber+1) {
  //       return -3.5
  //     } else if( movement==startNumber+2) {
  //       return -2.5
  //     } else  {
  //       return -2
  //     }
  //   }

  //   const yRot = ()=> {
  //     if(movement<startNumber) {
  //       return Math.PI *.3
  //     }
  //    else if(movement===startNumber) {
  //       return Math.PI *.3
  //     }
  //   else  if(movement ==startNumber+1) {
  //       return Math.PI *0
  //     } else if( movement==startNumber+2) {
  //       return Math.PI *-.3
  //     } else {
  //       return Math.PI *0
  //     }
  //   }
  const xpos = () => {
    if (page == "MainMenu") {
      return 0;
    } else {
      return 10;
    }
  };
  //    else if(movement===startNumber) {
  //       return Math.PI *0
  //     }
  //   else if(movement ==startNumber+1) {
  //       return Math.PI *0
  //     } else if( movement==startNumber+2) {
  //       return Math.PI *-0
  //     } else {
  //       return Math.PI * .5
  //     }
  //   }
  const yrot = () => {
    if (page == "MainMenu") {
      return Math.PI * 0;
    } else {
      return Math.PI * -0.5;
    }
  };
  const opas = () => {
    if (page == "MainMenu") {
      return 1;
    } else {
      return 0;
    }
  };
  // const { y } = useSpring({ y: yMovement() });
  //   const { x } = useSpring({ x:xMovement() })
  // const {z} = useSpring({z: zMovement()})
  const { yRotate } = useSpring({ yRotate: yrot() });
  const { x } = useSpring({ x: xpos() });
  const { opacity } = useSpring({ opacity: opas() });

  //   const { carouselRotation } = useSpring({
  //     from: {
  //       carouselRotation: 0,
  //     },
  //     to: [
  //       {
  //         carouselRotation: -Math.PI / 2,
  //         delay: STEP_DURATION,
  //       },
  //       {
  //         carouselRotation: -Math.PI,
  //         delay: STEP_DURATION,
  //       },
  //       {
  //         carouselRotation: -1.5 * Math.PI,
  //         delay: STEP_DURATION,
  //       },
  //       {
  //         carouselRotation: -2 * Math.PI,
  //         delay: STEP_DURATION,
  //       },
  //     ],
  //     config: {
  //       mass: 5,
  //       tension: 400,
  //       friction: 50,
  //     },
  //     loop: true,
  //     immediate: true,
  //   });
  // const [tvAnimation,setTvAnimation]= useState(1)

  //   const TvAnimation = () => {
  //     // let value = { rotateX: -1,z:-1.5 ,x: 6.9 };
  //     let value = { rotateX: -1,z:-1.5 ,x: 6.9 };
  // if(tvAnimation <=startNumber) {
  //   value = { z: -1.5, x: -6.5,  rotateX: -1 };
  // } else if(tvAnimation ===startNumber +1) {
  //       value = { z: -1.5, x: -6.5, rotateY: 2.2 };
  //     } else if (tvAnimation === startNumber + 2) {
  //       value = { x: 0 };
  //     } else if (tvAnimation === startNumber +3) {
  //       // value = { z: 0, y: 0, x: -5, opacity: 0 };
  //       value = { x: 6.9, rotateY: 4, z:-1.5 };
  //     } else if (tvAnimation >= startNumber +4) {
  //       value = { rotateX: -1,z:-1.5 ,x: 6.9 };
  //     }
  //     return value;
  //   };

  // function Image() {

  //   const loadImage = path => {
  //     return new Promise((resolve, reject) => {
  //       const img = new Image()
  //       img.crossOrigin = 'Anonymous' // to avoid CORS if used with Canvas
  //       img.src = path
  //       img.onload = () => {
  //         resolve(img)
  //       }
  //       img.onerror = e => {
  //         reject(e)
  //       }
  //     })
  //   }

  //   async function checker(){

  //     const img = await loadImage(imgLink)
  //     let height = img.naturalHeight;
  //     let width = img.naturalWidth;
  //     console.log(width,height)
  //     let proportions = width/height;

  //     setImageProportion(proportions)
  //   }
  //   useEffect(()=> {
  //     checker();

  //   },[])

  //   console.log(imageProportion,"image propoto")

  //     const texture = useTexture(
  //      imgLink
  //     );
  // const handleClick = ()=> {

  // }

  return (
    <animated.mesh
      // rotation-z={carouselRotation}
      //   animate={() => TvAnimation()}
      //   transition={{ duration: 0.6 }}
      receiveShadow
      position-x={x}
      //    position-z={z}
      rotation-y={yRotate}
      position={[0, 1, -8]}
      //  rotation-x={zRotate}

      // onClick={() => setPage("ImageSlider")}
      // position-y={3}
      // position-z={-7}

      // position={[0, 3, -7]}
      // rotation-x={Math.PI * 0.03}

      //   onClick={()=>handleClick() }
    >
      {/* <Title opacity={opacity} font={urFont} words="The Title" /> */}
      {/* <Text color="black" anchorX="center" anchorY="middle">
        Hello
      </Text> */}
      <TvLabel words={words} />
      {/* <planeBufferGeometry attach="geometry" args={[6, 8]} />
      <animated.meshStandardMaterial
        opacity={opacity}
        transparent
     
        attach="material"
        // map={texture}
      /> */}
      <MenuItem
        colorScheme={colorScheme}
        opacity={opacity}
        words="ImageSlider"
        positions={[0, 1.83, -2.5]}
        textscale={[1, 1, 1]}
        font={font}
        page={page}
        setPage={setPage}
      />
      <MenuItem
        colorScheme={colorScheme}
        opacity={opacity}
        words="more words"
        positions={[0, 0.34, -2.5]}
        textscale={[0.8, 0.8, 0.8]}
        font={font}
        page={page}
        setPage={setPage}
      />
      <MenuItem
        colorScheme={colorScheme}
        opacity={opacity}
        words="text Links"
        positions={[0, -1.1, -2.5]}
        textscale={[0.8, 0.8, 0.8]}
        font={font}
        page={page}
        setPage={setPage}
      />
    </animated.mesh>
  );
}

export default MainMenu;
