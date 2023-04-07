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
  MoveTvForward,
  imgLink,
  startNumber,
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

  const AnimatedText = animated(Text);
  return (
    <animated.mesh position={[0, 1.07, .68]} onClick={onClick}>
      <animated.mesh position={[0, 0, -1.56]}>
        <planeBufferGeometry args={[5, 1.2]} />
        <animated.meshStandardMaterial   transparent
      opacity={profileFade} color="pink" />
      </animated.mesh>
      
      <AnimatedText
       fillOpacity={profileFade}
        //   position={[0.34, 1.61, 0.24]}
        scale={[0.5, 0.5, 0.5]}
        // default
        position={[0, 0, -1.5]}
        anchorX="center" // default
        anchorY="middle" // default
        font={urFont}
        color="black"

        // color={ModelTextColor}
      >
      {words}
      </AnimatedText>
    </animated.mesh>
  );
}

export default ModelSocialElement;
