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
import ModelListClose from "./ModelListClose"

function ModelList({
  tvAnimation,
  MoveTvForward,
  imgLink,
  startNumber,
  words,
  movement,
  data,
  setMovement,
  font,
  performerData,
  page,
  close,
  key,
  fadeInMods,
  setPage,
  colorScheme,
}) {
console.log(performerData,"performer data")
  const xpos = () => {
    if (page == "MainMenu") {
      return 0;
    } else {
      return 10;
    }
  };

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
//   const { opacity } = useSpring({ opacity: opas() });
  const AnimatedText = animated(Text);

  return (
    <animated.mesh  position={[0, -0.5, 2]}>
        {performerData.map((item, key)=> {
            console.log(item.name, "name")
return (
    <animated.mesh  position={[0,.55-key, 0]}>
    <ModelListItemPic fadeInMods={fadeInMods} imgLink={imgLink} />
    <ModelListItem fadeInMods={fadeInMods}  />
    <AnimatedText
   fillOpacity={fadeInMods}
      position={[.34, 1.61, 0.24]}
      scale={[0.3, 0.3, 0.3]}
      // default
      anchorX="center" // default
      anchorY="middle" // default
      font={urFont}
      color="black"
     
      // color={ModelTextColor}
    >
     Violet Starr
    </AnimatedText>
    </animated.mesh> 
)

            
        })}
        <animated.mesh  position={[0,.5,0]}>

      <planeBufferGeometry  args={[5, 5]} />
      <animated.meshStandardMaterial transparent opacity={fadeInMods} transparent color="red" />
        </animated.mesh>
         );


<ModelListClose close={close} fadeInMods={fadeInMods}/>

    </animated.mesh>
  );
}

export default ModelList;
