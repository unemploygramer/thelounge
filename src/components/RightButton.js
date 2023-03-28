import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import {
  VRButton,
  ARButton,
  XR,
  Controllers,
  Hands,
  VRCanvas,
  Interactive,
} from "@react-three/xr";
import { Sky, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Arrow from "../assets/arrow.png";
import Zebru from "../assets/zebru.jpg";
function RightButton({ MoveTvForward, movement, setMovement }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);
  const [clicked, click] = useState(false);
  const texture = useLoader(TextureLoader, Arrow);
  useFrame((state, delta) => (ref.current.rotation.y += delta * 0.5));
  const handleClick = () => {
    setMovement(movement + 1);
  };
  const triggerIn = () => {
    setActive(true);
    console.log("trigger ran");
  };
  const triggerOut = () => {
    setActive(false);
    console.log("trigger ran");
  };
  return (
    <Interactive onSelect={handleClick} onHover={triggerIn}>
      <animated.mesh
        onPointerOver={() => triggerIn()}
        onPointerOut={() => triggerOut()}
        scale={scale}
        onClick={() => handleClick()}
        // onClick={(event) => MoveTvForward()}
        ref={ref}
        position={[3.1, 1.1, -4.3]}
      >
        <boxGeometry args={[0.5, 4, 0.5]} />
        <meshStandardMaterial color="hotpink" />
      </animated.mesh>
    </Interactive>
  );
}
export default RightButton;
