import React, { useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Interactive, XR, Controllers, VRButton } from "@react-three/xr";
import { useSpring, animated } from "@react-spring/three";
function TvLabel({
  MoveTvBackward,
  words,
  font,
  opacity,
  position,
  setPage,
  colorScheme,
}) {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);
  const [clicked, click] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  //   useFrame((state, delta) => (ref.current.rotation.y -= delta * 0.5));
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.1 : 1 });
  const { colorChange } = useSpring({
    colorChange: active ? colorScheme.primary : colorScheme.secondary,
  });
  const { colorChangeText } = useSpring({
    colorChangeText: active ? colorScheme.secondary : colorScheme.primary,
  });
  // const { position } = useSpring({
  //   position: active ? [0, 2.9, 0.5] : [0, 3, 0.3],
  // });

  const triggerIn = () => {
    setActive(true);
  };
  const triggerOut = () => {
    setActive(false);
  };
  const AnimatedText = animated(Text);
  const Clicked = () => {
    setPage("MainMenu");
  };

  return (
    <Interactive onSelect={Clicked} onHover={triggerIn} onBlur={triggerOut}>
      <animated.group
        scale={scale}
        onPointerOver={() => triggerIn()}
        onPointerOut={() => triggerOut()}
        rotation-x={Math.PI * 0.03}
        // rotation-y={Math.PI * .000} rotation-x={Math.PI * .06}  position={[0, 3.7,-2.5]}
        position={position}
      >
        <mesh onClick={(event) => Clicked()} ref={ref} position-y={0.14}>
          <planeBufferGeometry
            onHover={() => setIsHovered(true)}
            attach="geometry"
            args={[5.85, 1.4]}
          />
          <animated.meshBasicMaterial
            transparent
            opacity={opacity}
            color={colorChange}
            attach="material"
          />
        </mesh>
        <mesh>
          <AnimatedText
            fillOpacity={opacity}
            font={font}
            position-z={0.1}
            scale={[1, 1, 1]}
            color={colorChangeText} // default
            anchorX="center" // default
            anchorY="middle" // default
          >
            {words}
          </AnimatedText>
        </mesh>
        {/* <boxGeometry args={[0.5, 2.5, 0.5]} />
        <meshStandardMaterial color="hotpink" /> */}
      </animated.group>
    </Interactive>
  );
}
export default TvLabel;
