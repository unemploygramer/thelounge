import React, { useRef, useState } from "react";

function Rimlight(props) {
  return (
    <spotLight
      position-y={2}
      position-x={0}
      position-z={-1}
      intensity={2}
      castShadow
      lookAt={[0, 3, -7]}
      distance={6}
      // shadow-mapSize-width={256}
      // shadow-mapSize-height={256}
      shadow-mapSize={[1024, 1024]}
    />
  );
}
export default Rimlight;
