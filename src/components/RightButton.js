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
function RightButton({ movement, setMovement, data, page }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);
  const [clicked, click] = useState(false);
  const texture = useLoader(TextureLoader, Arrow);
  useFrame((state, delta) => (ref.current.rotation.y += delta * 0.5));
  console.log(movement, "movement");
  console.log(data.length);
  const handleClick = () => {
    let lastItem = data.length - 1;
    if (movement < lastItem) {
      setMovement(movement + 1);
    } else {
      return;
    }
  };
  const triggerIn = () => {
    setActive(true);
  };
  const triggerOut = () => {
    setActive(false);
  };

  const ypos = () => {
    if (page === "ImageSlider") {
      return 1.1;
    } else {
      return -20;
    }
  };
  const { y } = useSpring({ y: ypos() });
  const { opacity } = useSpring({ opacity: active ? 1 : 0.7 });
  return (
    <Interactive onSelect={handleClick} onHover={triggerIn}>
      <animated.mesh
        onPointerOver={() => triggerIn()}
        onPointerOut={() => triggerOut()}
        scale={scale}
        onClick={() => handleClick()}
        // onClick={(event) => MoveTvForward()}
        ref={ref}
        // position={[3.1, 1.1, -4.3]}
        position-x={3.1}
        position-z={-4.3}
        position-y={y}
      >
        <boxGeometry args={[0.5, 4, 0.5]} />
        <animated.meshStandardMaterial
          opacity={opacity}
          transparent
          color="hotpink"
        />
      </animated.mesh>
    </Interactive>
  );
}
export default RightButton;
