import { Center, Html, Text, Text3D, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";
import { useSpring, animated } from "@react-spring/three";
import ModelButton from "./ModelButton";
import ModelList from "./ModelList";

import urFont from "../components/fonts/Box.otf";
function TvSpring({
  tvAnimation,
  MoveTvForward,
  imgLink,
  startNumber,
  words,
  movement,
  setMovement,
  colorScheme,
  performerData,
  data,
  key,
  bannerDestination,
}) {
  const [imageProportion, setImageProportion] = useState(null);
  const STEP_DURATION = 500;
  const [active, setActive] = useState(false);
  const [hoverModel, setHoverModel] = useState(false);
  const [modelPageOpen, setModelPageOpen] = useState(false);

  const { carouselRotation } = useSpring({
    from: {
      carouselRotation: 0,
    },
    to: [
      {
        carouselRotation: -Math.PI / 2,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -Math.PI,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -1.5 * Math.PI,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -2 * Math.PI,
        delay: STEP_DURATION,
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },

    immediate: true,
  });
  const xMovement = () => {
    if (movement < startNumber) {
      return -15;
    } else if (movement === startNumber) {
      return -8;
    } else if (movement == startNumber + 1) {
      return 0;
    } else if (movement == startNumber + 2) {
      return 7.2;
    } else {
      return 9;
    }
  };
  const zMovement = () => {
    if (movement < startNumber) {
      return -3.5;
    } else if (movement === startNumber) {
      return -3.5;
    } else if (movement == startNumber + 1) {
      return -7.7;
    } else if (movement == startNumber + 2) {
      return -2.5;
    } else {
      return -2;
    }
  };

  const yRot = () => {
    if (movement < startNumber) {
      return Math.PI * 0.3;
    } else if (movement === startNumber) {
      return Math.PI * 0.3;
    } else if (movement == startNumber + 1) {
      return Math.PI * 0;
    } else if (movement == startNumber + 2) {
      return Math.PI * -0.3;
    } else {
      return Math.PI * 0;
    }
  };
  const zRot = () => {
    if (movement < startNumber) {
      return Math.PI * 0;
    } else if (movement === startNumber) {
      return Math.PI * 0;
    } else if (movement == startNumber + 1) {
      return Math.PI * 0.02;
    } else if (movement == startNumber + 2) {
      return Math.PI * -0;
    } else {
      return Math.PI * 0.5;
    }
  };

  const { TitleBackgroundColor } = useSpring({
    TitleBackgroundColor: active ? colorScheme.primary : colorScheme.secondary,
  });
  const { ModelButtonBackgroundColor } = useSpring({
    ModelButtonBackgroundColor: hoverModel
      ? colorScheme.primary
      : colorScheme.secondary,
  });
  const { TextColor } = useSpring({
    TextColor: active ? colorScheme.third : colorScheme.primary,
  });
  const { ModelTextColor } = useSpring({
    ModelTextColor: hoverModel ? colorScheme.third : colorScheme.primary,
  });

  const { opacity } = useSpring({ opacity: active ? 1 : 0.8 });
  const yMovement = () => {
    if (movement < startNumber) {
      return -2;
    } else if (movement === startNumber) {
      return 1.5;
    } else if (movement === startNumber + 1) {
      return 1.5;
    } else if (movement == startNumber + 2) {
      return 1.2;
    } else {
      return -2;
    }
  };

  const FadeInModels = () => {
    if (modelPageOpen === false) {
      return 0;
    } else {
      return 1;
    }
  };

  const { y } = useSpring({ y: yMovement() });
  const { x } = useSpring({ x: xMovement() });
  const { z } = useSpring({ z: zMovement() });
  const { yRotate } = useSpring({ yRotate: yRot() });
  const { zRotate } = useSpring({ zRotate: zRot() });
  const { fadeInMods } = useSpring({ fadeInMods: FadeInModels() });

  const loadImage = (path) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous"; // to avoid CORS if used with Canvas
      img.src = path;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = (e) => {
        reject(e);
      };
    });
  };

  async function checker() {
    const img = await loadImage(imgLink);
    let height = img.naturalHeight;
    let width = img.naturalWidth;

    let proportions = width / height;

    setImageProportion(proportions);
  }
  useEffect(() => {
    checker();
  }, []);
  const texture = useTexture(imgLink);

  console.log(data, "da data");

  function NewTab() {
    window.open(bannerDestination, "_blank");
  }
  const triggerIn = () => {
    setActive(true);
  };
  const triggerOut = () => {
    setActive(false);
  };
  const hoverModelIn = () => {
    setHoverModel(true);
  };
  const hoverModelOut = () => {
    setHoverModel(false);
  };
  const AnimatedText = animated(Text);
console.log(performerData, "performerdata")

  return (
    <animated.mesh
      // rotation-z={carouselRotation}
      //   animate={() => TvAnimation()}
      //   transition={{ duration: 0.6 }}
      receiveShadow
      position-x={x}
      position-z={z}
      rotation-y={yRotate}
      rotation-x={zRotate}
      position-y={y}
      position={[0, 1, -3.5]}
    >
      <ModelList
        colorScheme={colorScheme}
        close={() => setModelPageOpen(!modelPageOpen)}
        fadeInMods={fadeInMods}
        key={key}
        data={data}
        performerData={performerData}
      />
      {/* <Text color="black" anchorX="center" anchorY="middle">
        Hello
      </Text> */}
      <TvLabel
        colorScheme={colorScheme}
        click={NewTab}
        color={TextColor}
        words={words}
        triggerIn={triggerIn}
        triggerOut={triggerOut}
      />
      <animated.mesh
        onPointerOver={hoverModelIn}
        onPointerOut={hoverModelOut}
        onClick={() => setModelPageOpen(!modelPageOpen)}
        position={[-3.2, 2.1, 0.2]}
      >
        <planeBufferGeometry args={[2.2, 0.7]} />
        <animated.meshStandardMaterial color={ModelButtonBackgroundColor} />
        <AnimatedText
          position={[0, -0.08, 0.2]}
          scale={[0.5, 0.5, 0.5]}
          // default
          anchorX="center" // default
          anchorY="middle" // default
          font={urFont}
          color={ModelTextColor}
        >
          models
        </AnimatedText>
      </animated.mesh>

      <mesh
        // onPointerOver={() => triggerIn()}
        // onPointerOut={() => triggerOut()}
        onClick={() => NewTab()}
        position={[0, -2.14, 0.1]}
        onPointerOver={triggerIn}
        onPointerOut={triggerOut}
      >
        <planeBufferGeometry args={[5 * imageProportion, 0.7]} />
        <animated.meshStandardMaterial
          opacity={opacity}
          transparent
          color={TitleBackgroundColor}
        />
      </mesh>
      <planeBufferGeometry attach="geometry" args={[5 * imageProportion, 5]} />
      <meshStandardMaterial transparent attach="material" map={texture} />
    </animated.mesh>
  );
}

export default TvSpring;
