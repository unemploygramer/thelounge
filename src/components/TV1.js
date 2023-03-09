import { Center, Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext } from "react";

function TV1({ tvAnimation, MoveTvForward }) {
  const [clicked, click] = useState(false);
  // const [tvAnimation,setTvAnimation]= useState(1)

  const TvAnimation = () => {
    let value = { rotateX: -1,z:-1.5 ,x: 6.9 };
    if (tvAnimation === 1) {
      value = { z: -1.5, x: -6.5, rotateY: 2.2 };
    } else if (tvAnimation === 2) {
      value = { z: -3.5, y: 2, x: 0 };
    } else if (tvAnimation === 3) {
value = { x: 6.9, rotateY: 4, z:-1.5 };
    }
    return value;
  };
  // const MoveTvForward = ()=> {
  // setTvAnimation(props.tvAnimation +1)
  // }
  // <Html style={{ backgroundColor: "pink" }} distanceFactor={10} center>
  //       {/* <h1 style={{color:"purple"}}>hello</h1> */}
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           width: "200px",
  //           flexDirection: "column",
  //           alignContent: "center",
  //           margin: "30px",
  //         }}
  //       >
  //         <h1>This is the Title</h1>
  //         <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
  //       </div>
  //     </Html>
  return (
    <motion.mesh
      onClick={(event) => MoveTvForward()}
      animate={() => TvAnimation()}
      transition={{ type: "spring", stiffness: 40, duration: 0.6 }}
      receiveShadow
      rotation-x={Math.PI * 1}
      rotation-y={Math.PI * 1}
      position={[-8, 2, -3.5]}
    >
      <planeBufferGeometry attach="geometry" args={[6, 3]} />
      <meshStandardMaterial attach="material" color="white" />
    </motion.mesh>
  );
}

export default TV1;
