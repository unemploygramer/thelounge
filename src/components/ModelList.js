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
  selectedProfile,
  tvAnimation,
  MoveTvForward,
  imgLink,
  startNumber,
  words,
  movement,
  closeProfile,
  fadeInProfile,
  data,
  setMovement,

  font,
  performerData,
  page,
  close,
 profileFade,
  openProfile,
  key,
  fadeInMods,
  setPage,
  colorScheme,
}) {
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

  

  return (
    <animated.mesh position={[0, -1.9, 2]}>
      {performerData.map((item, key) => {
      
        let multi = key * 1.1;
        return (
          <animated.mesh position={[0, 0.55 - multi, 0]}>
            {/* <ModelListItemPic
              pic={item.profilePic}
              fadeInMods={fadeInMods}
              imgLink={imgLink}
            /> */}
            <animated.mesh>
              <ModelListItem
                openProfile={openProfile}
                profileFade={profileFade}
                page={page}
                setPage={setPage}
                colorScheme={colorScheme}
                fadeInMods={fadeInMods}
                name={item.name}
                pic={item.profilePic}
                imgLink={imgLink}
              />
            </animated.mesh>
            {/* <AnimatedText
              fillOpacity={fadeInMods}
              position={[0.34, 1.61, 0.24]}
              scale={[0.3, 0.3, 0.3]}
              // default
              anchorX="center" // default
              anchorY="middle" // default
              font={urFont}

              // color={ModelTextColor}
            >
              {item.name}
            </AnimatedText> */}
          </animated.mesh>
        );
      })}
      <animated.mesh position={[0, 1.7, 0]}>
        <planeBufferGeometry args={[5, 5]} />
        <animated.meshStandardMaterial
          color={colorScheme.third}
          transparent
          opacity={fadeInMods}
        />
      </animated.mesh>
      );
      <ModelListClose close={close} fadeInMods={fadeInMods} />
      <ModelProfile   selectedProfile={selectedProfile} performerData={performerData} closeProfile={closeProfile} openProfile={openProfile} profileFade={profileFade}/>
    </animated.mesh>
  );
}

export default ModelList;
