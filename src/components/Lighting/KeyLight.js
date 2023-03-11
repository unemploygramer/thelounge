import React, { useRef, useState } from "react";


function KeyLight(){


    return (
        <rectAreaLight
          width={3}
          height={3}
          color='white'
          intensity={1.3}
          position={[0, 4, 0]}
          lookAt={[0, 1, -3]}
          penumbra={1}
          castShadow
        />
      );
}
export default KeyLight;