import { useState } from "react"
import { useVideoTexture,Box } from "@react-three/drei"
import daVid from "../videos/daVid.mp4"
export function TvVideo() {

    const texture = useVideoTexture(daVid)
  
    return (
      <mesh position={[0,0,-1]}>
        <meshBasicMaterial map={texture} toneMapped={false} />
      
        <planeBufferGeometry attach="geometry" args={[5 , 5]} />
      <meshStandardMaterial

        transparent

        attach="material"
        map={texture}
      />
        </mesh>
    )
  }
