import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
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

function LeftButton({ movement, setMovement, data }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);
  const [clicked, click] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  useFrame((state, delta) => (ref.current.rotation.y -= delta * 0.5));
  const handleClick = () => {
    let lastItem = data.length - 1;
    console.log(lastItem, "last item");
    console.log(movement);
    if (movement > 0) {
      setMovement(movement - 1);
    } else return;
  };

  const triggerIn = () => {
    setActive(true);
  };
  const triggerOut = () => {
    setActive(false);
  };
  return (
    <Interactive onSelect={handleClick} onHover={triggerIn}>
      <animated.mesh
        onClick={(event) => handleClick()}
        ref={ref}
        position={[-3.1, 1.1, -4.3]}
        scale={scale}
        onPointerOver={() => triggerIn()}
        onPointerOut={() => triggerOut()}
      >
        <boxGeometry args={[0.5, 4, 0.5]} />
        <meshStandardMaterial color="hotpink" />
      </animated.mesh>
    </Interactive>
  );
}
export default LeftButton;
