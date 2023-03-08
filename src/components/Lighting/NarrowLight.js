import React, { useRef, useState } from "react";


function NarrowLight(){


    return (
        <spotLight
          width={3}
          height={3}
          color='white'
          intensity={.3}
          position={[0, 10, -8]}
          lookAt={[0, 0, -8]}
          penumbra={1}
          castShadow
        />
      );
}
export default NarrowLight;