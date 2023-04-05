import { Center, Html, Text, Text3D, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";
import { useSpring, animated } from "@react-spring/three";
import MenuItem from "../components/MenuItem";
import Title from "../components/Title";
import urFont from "../components/fonts/Box.otf";
import ModelListItem from "./ModelListItem";
import ModelListItemPic from "./ModelListItemPic";

function ModelList({
  tvAnimation,
  MoveTvForward,
  imgLink,
  startNumber,
  words,
  movement,
  setMovement,
  font,
  performerData,
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

  const { yRotate } = useSpring({ yRotate: yrot() });
  const { x } = useSpring({ x: xpos() });
  const { opacity } = useSpring({ opacity: opas() });
  const AnimatedText = animated(Text);

  return (
    <animated.mesh position={[0, -0.5, 2]}>
      <planeBufferGeometry args={[4.4, 4.3]} />
      <animated.meshStandardMaterial opacity={0.8} transparent color="red" />
      
      <animated.mesh position={[0, 0.5, 0]}>
        <ModelListItemPic imgLink={imgLink} />
        <ModelListItem />
        <AnimatedText
          position={[0, 1.61, 0.24]}
          scale={[0.5, 0.5, 0.5]}
          // default
          anchorX="center" // default
          anchorY="middle" // default
          font={urFont}
          color="black"
          // color={ModelTextColor}
        >
          models
        </AnimatedText>
      </animated.mesh>
    </animated.mesh>
  );
}

export default ModelList;
