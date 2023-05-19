import { Center, Html, Text, Text3D, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";
import { useSpring, animated } from "@react-spring/three";
import MenuItem from "./MenuItem";
import Title from "./Title";
import urFont from "../components/fonts/Box.otf";
import ModelListItem from "./ModelListItem";
import ModelListItemPic from "./ModelListItemPic";


function ModelSocialElement({
  tvAnimation,
  profileState,
  MoveTvForward,
  imgLink,
  startNumber,
  position,
  Link,
  transparent,
  profileFade,
  words,
  movement,
  data,
  setMovement,
  onClick,
  font,
  performerData,
  page,
  close,
  key,
  fadeInMods,
  setPage,
  colorScheme,
}) {
  //   console.log(performerData, "performer data");
  //   const xpos = () => {
  //     if (page == "MainMenu") {
  //       return 0;
  //     } else {
  //       return 10;
  //     }
  //   };

  //   const yrot = () => {
  //     if (page == "MainMenu") {
  //       return Math.PI * 0;
  //     } else {
  //       return Math.PI * -0.5;
  //     }
  //   };
  //   const opas = () => {
  //     if (page == "MainMenu") {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   };

  //   const { yRotate } = useSpring({ yRotate: yrot() });
  //   const { x } = useSpring({ x: xpos() });
  //   //   const { opacity } = useSpring({ opacity: opas() });
  //   const AnimatedText = animated(Text);
  //   console.log(colorScheme, "color scheme");

  const [active, setActive] = useState(false);
  const triggerIn = () => {
    setActive(true);
  };
  const triggerOut = () => {
    setActive(false);
  };
  const colorChange = () => {
    if (active === true) {
      return colorScheme.primary;
    } else {
      return colorScheme.secondary;
    }
  };
  const colorChangeText = () => {
    if (active === true) {
      return colorScheme.secondary;
    } else {
      return colorScheme.primary;
    }
  };

  console.log(colorScheme, "uuu")
  const { colorHover } = useSpring({ colorHover: colorChange() });
  const { HoverText } = useSpring({ HoverText: colorChangeText() });
 
  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

const visitTwitter = ()=> {
  if(movement=== startNumber &&  profileState) {

    if(isValidUrl(Link)) {
   
           return window.open(Link, "_blank");
    } else {
    
    }
  } else {
    console.log("no 2 both")
  }
  // window.open(Link, "_blank");
}
 




  const AnimatedText = animated(Text);
  return (
    <animated.mesh  onPointerOver={triggerIn}
    onPointerOut={triggerOut}  position={position}

     >
      <animated.mesh      onClick={()=> visitTwitter()} position={[0, 0, -1.56]}>
        <planeBufferGeometry args={[5, .94]} />
        <animated.meshStandardMaterial   transparent
      opacity={profileFade} color={colorHover} />
      </animated.mesh>
      
      <AnimatedText
       fillOpacity={profileFade}
        //   position={[0.34, 1.61, 0.24]}
        scale={[0.4, 0.4, 0.4]}
        // default
        position={[0, 0, -1.5]}
        anchorX="center" // default
        anchorY="middle" // default
        font={urFont}
        color={HoverText}

        // color={ModelTextColor}
      >
      {words}
      </AnimatedText>
    </animated.mesh>
  );
}

export default ModelSocialElement;
