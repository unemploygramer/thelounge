import { Center, Html, Text, Text3D, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";
import { useSpring, animated } from "@react-spring/three";
import MenuItem from "./MenuItem";
import Title from "./Title";
import urFont from "../components/fonts/Box.otf";

import ModelProfileTitle from "./ModelProfileTitle";
import ModelSocialElement from "./ModelSocialElement";

function ModelProfile({
  tvAnimation,
  MoveTvForward,
  imgLink,
  startNumber,
  words,
  movement,
  data,
  fadeInProfile,
  setMovement,
  profilePage,
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

  return (
    <animated.mesh
      onClick={profilePage}
      opacity={fadeInProfile}
      position={[0, 0, -0.2]}
    >
      <ModelProfileTitle />
      <animated.mesh position={[0, 0.5, -1]}>
        <planeBufferGeometry args={[6, 5.5]} />
        <animated.meshStandardMaterial color="yellow" />
      </animated.mesh>
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

      <ModelSocialElement />
      <animated.mesh position={[-2, 2.4, -0.94]}>
        <planeBufferGeometry args={[1, 1]} />
        <animated.meshStandardMaterial color="purple" />
      </animated.mesh>
    </animated.mesh>
  );
}

export default ModelProfile;
