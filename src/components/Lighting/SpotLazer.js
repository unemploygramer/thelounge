import React, { useRef, useState } from "react";

function SpotLazer(props) {
  return (
    <spotLight
      position={[0, 0, 1]}
      intensity={0.3}
      castShadow
      lookAt={[0, 2, -3.5]}
      //   distance={10}
      // shadow-mapSize-width={256}
      // shadow-mapSize-height={256}
      shadow-mapSize={[1024, 1024]}
    />
  );
}
export default SpotLazer;
