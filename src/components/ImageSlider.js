import React, { useRef, useState } from "react";

import { Interactive, XR, Controllers, VRButton } from "@react-three/xr";
import { useSpring, animated } from "@react-spring/three";
import TvSpring from "./TvSpring";
function ImageSlider({ data, movement, setMovement, page, setPage }) {
  const xpos = () => {
    if (page == "ImageSlider") {
      return 0;
    } else {
      return -20;
    }
  };
  const yrot = () => {
    if (page == "MainMenu") {
      return Math.PI * 0;
    } else {
      return Math.PI * -0.5;
    }
  };
  const opas = () => {
    if (page == "MainMenu") {
      return 1;
    } else {
      return 0;
    }
  };
  // const { y } = useSpring({ y: yMovement() });
  //   const { x } = useSpring({ x:xMovement() })
  // const {z} = useSpring({z: zMovement()})
  const { yRotate } = useSpring({ yRotate: yrot() });
  const { x } = useSpring({ x: xpos() });
  const { opacity } = useSpring({ opacity: opas() });
  return (
    <animated.group position-x={x}>
      {data.map((e, key) => {
        let startLocation = key - 1;
        return (
          <TvSpring
            movement={movement}
            setMovement={setMovement}
            words={e.name}
            startNumber={startLocation}
            imgLink={e.link}
          />
        );
      })}
    </animated.group>
  );
}
export default ImageSlider;
