import React, { useRef, useState } from "react";


function BackLight(){


    return (
        <pointLight
          width={3}
          height={3}
          color='white'
          intensity={.1}
          position={[0, 7, -9]}
          lookAt={[0, -4, -9]}
          penumbra={1}
          castShadow
        />
      );
}
export default BackLight;