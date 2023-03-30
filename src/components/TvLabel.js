
import { Sky, Text } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { animated } from "@react-spring/three";
import {
  VRButton,
  ARButton,
  XR,
  Controllers,
  Hands,
  VRCanvas,
  Interactive,
} from "@react-three/xr";
import urFont from "../fonts/Box.otf";

function TvLabel({ MoveTvBackward ,words,color ,click}) {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  // const [color, setColor] = useState(0x123456);
  // const [clicked, click] = useState(false);

//   useFrame((state, delta) => (ref.current.rotation.y -= delta * 0.5));
const AnimatedText = animated(Text);
  return (
    <mesh
      onClick={(event) => click()}
      ref={ref}
   
    >
    
           <AnimatedText
    position={[0,-2.2,0.2]}
        scale={[.5, .5, .5]}
        color={color} // default
        anchorX="center" // default
        anchorY="middle" // default
        font={urFont}
      >
       {words}
      </AnimatedText>
      {/* <boxGeometry args={[0.5, 2.5, 0.5]} />
      <meshStandardMaterial color="hotpink" /> */}
    </mesh>
  );
}
export default TvLabel;
