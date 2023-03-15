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
import { useSpring, animated } from '@react-spring/three'

function RightButton({ MoveTvForward }) {
  const ref = useRef();
  const [active, setActive] = useState(false)
  const { scale } = useSpring({ scale: active ? 1.5 : 1 })
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += delta * 0.5));

  return (
    <Interactive onHover={() => setActive(true)}>

    <animated.mesh scale={scale} onClick={() => setActive(!active)}
      // onClick={(event) => MoveTvForward()}
      ref={ref}
      position={[2.9, 2, -2.5]}
      >
      <boxGeometry args={[0.5, 2.5, 0.5]} />
      <meshStandardMaterial color="hotpink" />
    </animated.mesh>
      </Interactive>
  );
}
export default RightButton;
