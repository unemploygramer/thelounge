import { Center, Html, Text, Text3D, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";
import { useSpring, animated } from "@react-spring/three";
import { Interactive } from "@react-three/xr";
function MenuItem({
  tvAnimation,
  MoveTvForward,
  imgLink,
  startNumber,
  words,
  movement,
  setMovement,
  font,
  positions,
  textscale,
  opacity,
  page,
  setPage,
  colorScheme,
}) {
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.1 : 1 });
  const { positionZ } = useSpring({ positionZ: active ? 2 : 0.1 });
  let closerMovement = positions[2] + 0.3;
  const { position } = useSpring({
    position: active
      ? [positions[0], positions[1], closerMovement]
      : [positions[0], positions[1], positions[2]],
  });
  const { colorChange } = useSpring({
    colorChange: active ? colorScheme.primary : colorScheme.secondary,
  });
  const { colorChangeText } = useSpring({
    colorChangeText: active ? colorScheme.secondary : colorScheme.primary,
  });
  const triggerIn = () => {
    setActive(true);
  };
  const triggerOut = () => {
    setActive(false);
  };

  const AnimatedText = animated(Text);
  const handleClick = () => {
    setPage(words);
    console.log(words, "the words");
  };

  return (
    <Interactive onHover={triggerIn} onBlur={triggerOut} onSelect={handleClick}>
      <animated.mesh
        scale={scale}
        onPointerOver={() => triggerIn()}
        onPointerOut={() => triggerOut()}
        receiveShadow
        //

        onClick={() => handleClick()}
        position={position}
        opacity={opacity}
      >
        <AnimatedText
          fillOpacity={opacity}
          font={font}
          position-z={0.1}
          position-y={-0.1}
          scale={textscale}
          color={colorChangeText} // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          {words}
        </AnimatedText>
        <planeBufferGeometry attach="geometry" args={[5.9, 1.5]} />
        <animated.meshStandardMaterial
          opacity={opacity}
          transparent
          color={colorChange}
          attach="material"
          // map={texture}
        />
      </animated.mesh>
    </Interactive>
  );
}

export default MenuItem;
