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

function LeftButton({ MoveTvBackward }) {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y -= delta * 0.5));

  return (
    <mesh
      onClick={(event) => MoveTvBackward()}
      ref={ref}
      position={[-2.9, 2, -2.5]}
    >
      <boxGeometry args={[0.5, 2.5, 0.5]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
export default LeftButton;
