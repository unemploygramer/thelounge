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


function ModelProfileTitle({
  tvAnimation,
  MoveTvForward,
  imgLink,
  startNumber,
  words,
 performerName,
  movement,
  data,
  setMovement,
  font,
  performerData,
  page,
  close,
  profileFade,
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
  const ScaleChange = () => {
    if (active === true) {
      return 1.1;
    } else {
      return 1;
    }
  };

  console.log(colorScheme, "uuu")
  const { BackgroundScale } = useSpring({ BackgroundScale: ScaleChange() });
  const { colorHover } = useSpring({ colorHover: colorChange() });
  const { HoverText } = useSpring({ HoverText: colorChangeText() });

  const AnimatedText = animated(Text);
  return (
    <animated.mesh   onPointerOver={triggerIn}
    onPointerOut={triggerOut} position={[0.6, 2.4, 0.7]}>
      <animated.mesh  position={[0, 0, -1.55]}>
        <planeBufferGeometry args={[3.7, 1]} />
        <animated.meshStandardMaterial transparent  opacity={profileFade} color={colorHover} />
      </animated.mesh>
      <AnimatedText
        // fillOpacity={fadeInMods}
        fillOpacity={profileFade}
        //   position={[0.34, 1.61, 0.24]}
        scale={[0.5, 0.5, 0.5]}
        // default
        position={[0, 0, -1.5]}
        anchorX="center" // default
        anchorY="middle" // default
        font={urFont}
        color={HoverText}

        // color={ModelTextColor}
      >
     {performerName}
      </AnimatedText>

     
    </animated.mesh>
  );
}

export default ModelProfileTitle;
