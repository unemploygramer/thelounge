function Back() {
    return (
      <mesh receiveShadow rotation-x={Math.PI * 1} rotation-y={Math.PI *1} position={[0, 2, -4]}>
        <planeBufferGeometry attach="geometry" args={[10, 5]} />
        <meshStandardMaterial attach="material" color="pink" />
      </mesh>
    );
  }

  export default Back;