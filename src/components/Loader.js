import { useFrame } from 'react-three-fiber';
import { Group, Mesh, SphereBufferGeometry, IcosahedronBufferGeometry } from 'three';

function LowPolyShape() {
  const groupRef = useRef();
  
  // Rotate the group each frame
  useFrame(() => {
    groupRef.current.rotation.y += 0.01;
    groupRef.current.rotation.x += 0.02;
  });

  return (
    <group ref={groupRef}>
      <Mesh position={[-2, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <SphereBufferGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color={'#6da1e6'} />
      </Mesh>
      <Mesh position={[2, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <IcosahedronBufferGeometry args={[1, 0]} />
        <meshBasicMaterial color={'#d66060'} />
      </Mesh>
    </group>
  );
}
