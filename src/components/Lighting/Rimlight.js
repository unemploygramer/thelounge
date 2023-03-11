import React, { useRef, useState } from "react";


function Rimlight(props) {


  return (
    <spotLight
    color="#ffffff"
    position-y={2}
    position-x={0}
    position-z={-5}
    intensity={2}
    castShadow
    distance={6}
    // shadow-mapSize-width={256}
    // shadow-mapSize-height={256}
    shadow-mapSize={[1024, 1024]}
  />

  );
}
export default Rimlight;
