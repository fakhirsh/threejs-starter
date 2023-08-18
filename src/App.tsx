import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'


import { useRef } from 'react';
import { Mesh } from 'three';
import './App.css'

function Cube(){
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if(!meshRef.current){
      return;
    }
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.001;
  });

  return(
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

function ThreeScene(){
  return(
  <Canvas>
      <ambientLight intensity={1}/>
      <pointLight position={[10, 10, 10]} />
      <pointLight intensity={900} position={[10, 10, 10]} />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
}

function App() {
  return (
    <div className='h-screen'>
      <ThreeScene />
    </div>
  )
}

export default App
