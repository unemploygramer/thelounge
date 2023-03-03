import React, { useRef, useState } from "react";


function FillLight(){


    return (
        <rectAreaLight
          width={3}
          height={3}
          intensity={1}
          color="white"
          position={[0,3,0]}
          lookAt={[0, 1, -3]}
          penumbra={2}
          castShadow
        />
      );
}
export default FillLight;