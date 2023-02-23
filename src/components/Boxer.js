import React, { useRef, useState } from 'react'
import {  useFrame } from '@react-three/fiber'
import { motion } from "framer-motion-3d"
function Boxer(props) {
 const ref = useRef()
// console.log(ref.current.rotation.x, "the x value")
    const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

    useFrame((state, delta) => (ref.current.rotation.x += delta  * .5, ref.current.rotation.y += delta  * .5))
  return (
     <motion.mesh

     animate={{ x: 2 }}
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </motion.mesh>
  );
}

export default Boxer;
