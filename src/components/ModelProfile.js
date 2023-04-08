import { Center, Html, Text, Text3D, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";
import { useSpring, animated } from "@react-spring/three";
import MenuItem from "./MenuItem";
import Title from "./Title";
import urFont from "../components/fonts/Box.otf";
import ButtonClose from "./ButtonClose";
import ModelProfileTitle from "./ModelProfileTitle";
import ModelSocialElement from "./ModelSocialElement";

function ModelProfile({
  tvAnimation,
  MoveTvForward,
  imgLink,
  startNumber,
  profileFade,
  words,
  closeProfile,
  movement,
  openProfile,
  data,

  setMovement,
  profilePage,
  font,
  performerData,
  page,
  selectedProfile,
  close,
  key,
  fadeInMods,
  setPage,
  colorScheme,

}) {
 console.log(performerData, ";;;");
let performerArray =  performerData.filter(function(el){
  return el.name === selectedProfile
  // return el.name === selectedProfile
 })
let performerName;
let twitterLink;
if (performerArray.length > 0 ) {

performerName =performerArray[0].name
twitterLink = performerArray[0].socials.twitter

}
  return (
    <animated.mesh
  
   
      position={[0, 0, -0.2]}
      
  
    >
      <ModelProfileTitle performerName={performerName} performerData={performerData} profileFade={profileFade} />
      <animated.mesh position={[0, 0.5, -1]}>
        <planeBufferGeometry args={[6, 5.5]} />
        <animated.meshStandardMaterial     
     
      opacity={profileFade}
     transparent color="gold" />
      </animated.mesh>
  <ButtonClose onClick={closeProfile} opacity={profileFade}
 rotation={[Math.PI*.1,Math.PI * -.15,Math.PI*-.05]}  position={[2.8,3.3,0]}/>

      <ModelSocialElement twitterLink={twitterLink}   words={"twitter"}  transparent
      profileFade={profileFade} />
      <animated.mesh position={[-2, 2.4, -0.94]}>
        <planeBufferGeometry args={[1, 1]} />
        <animated.meshStandardMaterial   transparent
      opacity={profileFade} color="purple" />
      </animated.mesh>
    </animated.mesh>
  );
}

export default ModelProfile;
