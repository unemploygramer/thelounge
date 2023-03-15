
import { Sky, Text } from "@react-three/drei";
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
function TvLabel({ MoveTvBackward ,words}) {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);
  const [clicked, click] = useState(false);

//   useFrame((state, delta) => (ref.current.rotation.y -= delta * 0.5));

  return (
    <mesh
      onClick={(event) => MoveTvBackward()}
      ref={ref}
   
    >
    
           <Text
    position={[0,-2.2,0.2]}
        scale={[.5, .5, .5]}
        color="Hotpink" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
       {words}
      </Text>
      {/* <boxGeometry args={[0.5, 2.5, 0.5]} />
      <meshStandardMaterial color="hotpink" /> */}
    </mesh>
  );
}
export default TvLabel;
