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
import ModelListClose from "./ModelListClose";
import ModelProfile from "./ModelProfile";

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
  const [active, setActive] = useState(-1);
  const [info, setInfo] = useState([]);
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

  const { yRotate } = useSpring({ yRotate: yrot() });
  const { x } = useSpring({ x: xpos() });
  //   const { opacity } = useSpring({ opacity: opas() });
  const AnimatedText = animated(Text);

  let performerNameList = performerData.map((item) => {
    return item.name;
  });
  console.log(performerNameList.indexOf(active), "perfomer");
  let indexModel = performerNameList.indexOf(active);
  const colorChange = () => {
    if (indexModel == 0) {
      return colorScheme.secondary;
    } else {
      return colorScheme.primary;
    }
  };

  const { colorHover } = useSpring({ colorHover: colorChange() });
  return (
    <animated.mesh position={[0, -0.5, 2]}>
 
   
          <animated.mesh position={[0, 0.55 - key, 0]}>
            <AnimatedText
              fillOpacity={fadeInMods}
              position={[0.34, 1.61, 0.24]}
              scale={[0.3, 0.3, 0.3]}
              // default
              anchorX="center" // default
              anchorY="middle" // default
              font={urFont}
              color={colorHover}

              // color={ModelTextColor}
            >
              {item.name}
            </AnimatedText>
          </animated.mesh>
        );
  

    </animated.mesh>
  );
}

export default ModelList;
