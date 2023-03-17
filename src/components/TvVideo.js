import { useState } from "react"
import { useVideoTexture,Box } from "@react-three/drei"
import daVid from "../videos/daVid.mp4"
export function TvVideo() {
    const [video] = useState(() => Object.assign(document.createElement('video'), { src: './video.mp4', crossOrigin: 'Anonymous', loop: true }))
    video.play()
    const texture = useVideoTexture(daVid)
    return (
      <mesh position={[0,0,-1]}>
        {/* <meshBasicMaterial map={texture} toneMapped={false} /> */}
        <Box/>
        </mesh>
    )
  }
