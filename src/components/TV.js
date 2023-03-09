import { Center, Html, Text, Text3D } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext } from "react";

function TV({ tvAnimation, MoveTvForward }) {
  const [clicked, click] = useState(false);
  // const [tvAnimation,setTvAnimation]= useState(1)

  const TvAnimation = () => {
    let value = { x: 20 };
    if (tvAnimation === 1) {
      value = { x: 0 };
    } else if (tvAnimation === 2) {
      // value = { z: 0, y: 0, x: -5, opacity: 0 };
      value = { x: 6.9, rotateY: 4 };
    } else if (tvAnimation === 3) {
      value = { x: 3 };
    }
    return value;
  };

  // html inside
  //   <Html style={{ backgroundColor: "pink" }} distanceFactor={10} center>
  //   {/* <h1 style={{color:"purple"}}>hello</h1> */}
  //   <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "center",
  //       width: "200px",
  //       flexDirection: "column",
  //       alignContent: "center",
  //       margin: "30px",
  //     }}
  //   >
  //     <h1>This is the Title</h1>
  //     <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
  //   </div>
  // </Html>
  // const MoveTvForward = ()=> {
  // setTvAnimation(props.tvAnimation +1)
  // }
  return (
    <motion.mesh
      onClick={(event) => MoveTvForward()}
      animate={() => TvAnimation()}
      transition={{ duration: 0.6 }}
      receiveShadow
      rotation-x={Math.PI * 1}
      rotation-y={Math.PI * 1}
      rotation-z={Math.PI * 1}
      position={[0, 2, -3.5]}
    >
      {/* <Text color="black" anchorX="center" anchorY="middle">
        Hello
      </Text> */}

      <planeBufferGeometry attach="geometry" args={[6, 3]} />
      <meshStandardMaterial
        opacity={0.8}
        transparent
        color="hotpink"
        attach="material"
      />
    </motion.mesh>
  );
}

export default TV;
