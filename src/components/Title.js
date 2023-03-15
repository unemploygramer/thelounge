import React, { useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Interactive, XR, Controllers, VRButton } from '@react-three/xr'

function TvLabel({ MoveTvBackward ,words, font}) {

    const ref = useRef();
    const [hover, setHover] = useState(false);
    const [color, setColor] = useState(0x123456);
    const [clicked, click] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    console.log(isHovered,"is hovered")
  
  //   useFrame((state, delta) => (ref.current.rotation.y -= delta * 0.5));
  
  
    return (
        
        <Interactive onHover={() => setIsHovered(true)}>
        <motion.group scale={isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]} 
           whileHover={{ scale: 1.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(true)}     initial="hidden"
       
      rotation-y={Math.PI * .004} rotation-x={Math.PI * .06}  position={[0, 3.7,-2.5]}>


      <mesh
        // onClick={(event) => MoveTvBackward()}
        ref={ref}
        position-y={0.14}
        
        
        >
              <planeBufferGeometry onHover={() => setIsHovered(true)}    attach="geometry" args={[5.3, 1.2]} />
        <meshBasicMaterial  color="purple"   attach="material" />
        </mesh>
        <mesh>

     
             <Text
             font={font}
             position-z={.1}
             scale={[1, 1, 1]}
             color="Hotpink" // default
             anchorX="center" // default
             anchorY="middle" // default
             >
         {words}
        </Text>
        </mesh>
        {/* <boxGeometry args={[0.5, 2.5, 0.5]} />
        <meshStandardMaterial color="hotpink" /> */}
    
      </motion.group>
        </Interactive>

    );
  }
  export default TvLabel;
  