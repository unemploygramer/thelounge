import { Center, Html, Text, Text3D, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";
import { useSpring, animated } from "@react-spring/three";
import MenuItem from "../components/MenuItem";
import Title from "../components/Title";
import urFont from "../components/fonts/Box.otf";

function ModelListItemPic({
  tvAnimation,
  MoveTvForward,
  opacity,
  fadeInMods,
  pic,
  startNumber,
  words,
  movement,
  setMovement,
  font,
  page,
  setPage,
  colorScheme,
}) {
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
  // const { opacity } = useSpring({ opacity: opas() });

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
    const img = await loadImage(pic);
    let height = img.naturalHeight;
    let width = img.naturalWidth;

    let proportions = width / height;

    // setImageProportion(proportions);
  }
  useEffect(() => {
    checker();
  }, []);
  console.log(pic, "da pick");
  const texture = useTexture(pic);
  return (
    <animated.mesh position={[-1.66, 0, .01]}>
      <planeBufferGeometry args={[1, 1]} />
      <animated.meshStandardMaterial
        opacity={fadeInMods}
        transparent
        map={texture}
      />
    </animated.mesh>
  );
}

export default ModelListItemPic;
