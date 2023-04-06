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
import ModelListClose from "./ModelListClose";

function ModelProfileTitle({
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
    <animated.mesh position={[0.6, 2.4, 0.7]}>
      <animated.mesh position={[0, 0, -1.55]}>
        <planeBufferGeometry args={[3.7, 1]} />
        <animated.meshStandardMaterial color="green" />
      </animated.mesh>
      <AnimatedText
        fillOpacity={fadeInMods}
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
        The Name
      </AnimatedText>

      {/* {performerData.map((item, key) => {
        console.log(item.profilePic, "name");

        return (
          <animated.mesh position={[0, 0.55 - key, 0]}>
            <ModelListItemPic
              pic={item.profilePic}
              fadeInMods={fadeInMods}
              imgLink={imgLink}
            />
            <ModelListItem fadeInMods={fadeInMods} />
            <AnimatedText
              fillOpacity={fadeInMods}
              position={[0.34, 1.61, 0.24]}
              scale={[0.3, 0.3, 0.3]}
              // default
              anchorX="center" // default
              anchorY="middle" // default
              font={urFont}
              color="black"

              // color={ModelTextColor}
            >
              {item.name}
            </AnimatedText>
          </animated.mesh>
        );
      })}
      <animated.mesh position={[0, 0.5, 0]}>
        <planeBufferGeometry args={[5, 5]} />
        <animated.meshStandardMaterial
          color={colorScheme.secondary}
          transparent
          opacity={fadeInMods}
          transparent
        />
      </animated.mesh>
      );
      <ModelListClose close={close} fadeInMods={fadeInMods} /> */}
      {/* <animated.mesh position={[0, 0.5, -1.6]}>
        <planeBufferGeometry args={[5, 5]} />
        <animated.meshStandardMaterial />
      </animated.mesh> */}
    </animated.mesh>
  );
}

export default ModelProfileTitle;
