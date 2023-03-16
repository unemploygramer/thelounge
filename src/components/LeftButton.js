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

function LeftButton({ MoveTvBackward, movement, setMovement }) {
  const ref = useRef();
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);
  const [clicked, click] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 })
  useFrame((state, delta) => (ref.current.rotation.y -= delta * 0.5));
  const handleClick = ()=> {

      setMovement(movement-1)
   
  }

  const triggerIn = ()=> {
    setActive(true)
    console.log('trigger ran')
  }
  const triggerOut = ()=> {
    setActive(false)
    console.log('trigger ran')
  }
  return (
    <Interactive onSelect={handleClick} onHover={triggerIn} >
    <animated.mesh
      onClick={(event) => handleClick()}
      ref={ref}
      position={[-2.9, 2, -2.5]}
      scale={scale}
      onPointerOver={()=> triggerIn()} onPointerOut={()=> triggerOut()}
    >
      <boxGeometry args={[0.5, 2.5, 0.5]} />
      <meshStandardMaterial color="hotpink" />
    </animated.mesh>
    </Interactive>
  );
}
export default LeftButton;
