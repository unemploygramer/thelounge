import { Center, Html, Text, Text3D, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";
import { useSpring, animated } from "@react-spring/three";
import MenuItem from "../components/MenuItem";
import Title from "../components/Title";
import urFont from "../components/fonts/Box.otf";
import ModelListItemPic from "./ModelListItemPic";
function ModelListItem({
  tvAnimation,
  MoveTvForward,
  imgLink,
  openProfile,
profileFade,
  startNumber,
  words,
  movement,
  setMovement,
  fadeInMods,
  name,
  font,
  page,
  profilePage,
  pic,
  setPage,
  colorScheme,
}) {
  const [active, setActive] = useState(false);
  const triggerIn = () => {
    setActive(true);
  };
  const triggerOut = () => {
    setActive(false);
  };
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

  const { colorHover } = useSpring({ colorHover: colorChange() });
  const { HoverText } = useSpring({ HoverText: colorChangeText() });
  const { BackgroundScale } = useSpring({ BackgroundScale: ScaleChange() });
  const { yRotate } = useSpring({ yRotate: yrot() });
  const { x } = useSpring({ x: xpos() });
  const { opacity } = useSpring({ opacity: opas() });
  const { colortransaction } = useSpring({});

  const loadImage = (path) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous"; // to avoid CORS if used with Canvas
      img.src = path;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = (e) => {
        reject(e);
      };
    });
  };
  async function checker() {
    const img = await loadImage(imgLink);
    let height = img.naturalHeight;
    let width = img.naturalWidth;

    let proportions = width / height;

    // setImageProportion(proportions);
  }
  useEffect(() => {
    checker();
  }, []);
  const AnimatedText = animated(Text);
  const Clicked = () => {
    setPage("MainMenu");
  };
  console.log(name, "namename")
  return (
    <animated.mesh
      onPointerOver={triggerIn}
      onPointerOut={triggerOut}
      position={[0, 2.7, 0.2]}
      scale={BackgroundScale}
   
      onClick={(e)=> openProfile(name)}
      transparent
      opacity={profileFade}
    >
      <ModelListItemPic pic={pic} fadeInMods={fadeInMods} imgLink={imgLink} />
      <planeBufferGeometry args={[4.32, 1]} />
      <animated.meshStandardMaterial
        opacity={fadeInMods}
        transparent
        color={colorHover}
      />
      <AnimatedText
        fillOpacity={fadeInMods}
        position={[0.39, -0.06, 0.24]}
        scale={[0.3, 0.3, 0.3]}
        // default
        anchorX="center" // default
        anchorY="middle" // default
        font={urFont}
        color={HoverText}
      >
        {name}
      </AnimatedText>
    </animated.mesh>
  );
}

export default ModelListItem;
