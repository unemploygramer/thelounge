import { Center, Html, Text, Text3D, useTexture} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React, { useRef, useState, useContext, useEffect } from "react";
import TvLabel from "./TvLabel";

function TV({ tvAnimation, MoveTvForward, imgLink, startNumber }) {
  const [clicked, click] = useState(false);
  const [imageProportion, setImageProportion]= useState(null)
  // const [tvAnimation,setTvAnimation]= useState(1)

  const TvAnimation = () => {
    // let value = { rotateX: -1,z:-1.5 ,x: 6.9 };
    let value = { rotateX: -1,z:-1.5 ,x: 6.9 };
if(tvAnimation <=startNumber) {
  value = { z: -1.5, x: -6.5,  rotateX: -1 };
} else if(tvAnimation ===startNumber +1) {
      value = { z: -1.5, x: -6.5, rotateY: 2.2 };
    } else if (tvAnimation === startNumber + 2) {
      value = { x: 0 };
    } else if (tvAnimation === startNumber +3) {
      // value = { z: 0, y: 0, x: -5, opacity: 0 };
      value = { x: 6.9, rotateY: 4, z:-1.5 };
    } else if (tvAnimation >= startNumber +4) {
      value = { rotateX: -1,z:-1.5 ,x: 6.9 };
    }
    return value;
  };

  // function Image() {


  const loadImage = path => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'Anonymous' // to avoid CORS if used with Canvas
      img.src = path
      img.onload = () => {
        resolve(img)
      }
      img.onerror = e => {
        reject(e)
      }
    })
  }
 
  async function checker(){

    const img = await loadImage(imgLink)
    let height = img.naturalHeight;
    let width = img.naturalWidth;
    console.log(width,height)
    let proportions = width/height;

    setImageProportion(proportions)
  }
  useEffect(()=> {
    checker();
    // async function checker (){

    //   image = new Image;
    //   image.src="https://cdni.pornpics.com/1280/1/306/80647930/80647930_004_e3b4.jpg"
    //   await console.log(image.naturalHeight, "the image")
    // }
  },[])

 
console.log(900 *.6666666666)
  console.log(imageProportion,"image propoto")
  //  function getHiWi() {
  //  useEffect(()=> {
  //     let image = new Image();
  //     console.log(image)
  //     image.src = "https://cdni.pornpics.com/1280/1/306/80647930/80647930_004_e3b4.jpg"
  //     const imageWidth = image.naturalWidth;
  //     console.log(imageWidth)
  //     const imageHeight = image.naturalHeight;
  //     let proportion = imageWidth/imageHeight
  //     setImageProportion(proportion)
      
  //   },[])
  // }
  
  
  
    const texture = useTexture(
     imgLink
    );

   
  //   return (
  //     <mesh position={[0, 2, -3.5]}>
  //       <planeBufferGeometry attach="geometry" args={[3, 3]} />
  //       <meshBasicMaterial attach="material" map={texture} />
  //     </mesh>
  //   );
  // }

  // html inside
  //   <Html style={{ backgroundColor: "pink" }} distanceFactor={10} center>
  //   {/* <h1 style={{color:"purple"}}>hello</h1> */}
  //   <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "center",
  //       width: "200px",
  //       flexDirection: "column",
  //       alignContent: "center",
  //       margin: "30px",
  //     }}
  //   >
  //     <h1>This is the Title</h1>
  //     <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
  //   </div>
  // </Html>
  // const MoveTvForward = ()=> {
  // setTvAnimation(props.tvAnimation +1)
  // }
  return (
    <motion.mesh
      onClick={(event) => MoveTvForward()}
      animate={() => TvAnimation()}
      transition={{ duration: 0.6 }}
      receiveShadow
      rotation-x={Math.PI * 1}
      rotation-y={Math.PI * 1}
      rotation-z={Math.PI * 1}
      position={[-3, 2, -3.5]}
    >
      {/* <Text color="black" anchorX="center" anchorY="middle">
        Hello
      </Text> */}
<TvLabel/>
      <planeBufferGeometry attach="geometry" args={[5 * imageProportion, 5]} />
      <meshStandardMaterial

        transparent

        attach="material"
        map={texture}
      />
    </motion.mesh>
  );
}

export default TV;
