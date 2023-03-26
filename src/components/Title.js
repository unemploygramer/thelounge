import React, { useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Interactive, XR, Controllers, VRButton } from "@react-three/xr";
import { useSpring, animated } from "@react-spring/three";
function TvLabel({ MoveTvBackward, words, font }) {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);
  const [clicked, click] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered, "is hovered");

  //   useFrame((state, delta) => (ref.current.rotation.y -= delta * 0.5));
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.2 : 1 });
  const { position } = useSpring({
    position: active ? [0, 4, -3] : [0, 4.1, -3.3],
  });

  const triggerIn = () => {
    setActive(true);
    console.log("trigger ran");
  };
  const triggerOut = () => {
    setActive(false);
    console.log("trigger ran");
  };

  return (
    <Interactive onHover={() => setIsHovered(true)}>
      <animated.group
        scale={scale}
        onPointerOver={() => triggerIn()}
        onPointerOut={() => triggerOut()}
        // rotation-y={Math.PI * .000} rotation-x={Math.PI * .06}  position={[0, 3.7,-2.5]}
        position={position}
      >
        <mesh
          // onClick={(event) => MoveTvBackward()}
          ref={ref}
          position-y={0.14}
        >
          <planeBufferGeometry
            onHover={() => setIsHovered(true)}
            attach="geometry"
            args={[5.85, 1.4]}
          />
          <meshBasicMaterial
            transparent
            opacity={1}
            color="purple"
            attach="material"
          />
        </mesh>
        <mesh>
          <Text
            font={font}
            position-z={0.1}
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
      </animated.group>
    </Interactive>
  );
}
export default TvLabel;
