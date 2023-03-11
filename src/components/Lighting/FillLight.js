import React, { useRef, useState } from "react";


function FillLight(){


    return (
        <rectAreaLight
          width={3}
          height={3}
          intensity={4}
          color="white"
          position={[0,3,2]}
          lookAt={[0, 1, -3]}
          penumbra={2}
          castShadow
  
        />
      );
}
export default FillLight;