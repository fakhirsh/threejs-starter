import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { useRef } from 'react';
import { Mesh } from 'three';
import './App.css'

function RendererSettings() {
  const { gl } = useThree();
  gl.outputEncoding = THREE.sRGBEncoding;
  return null;
}


function Cube(){
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if(!meshRef.current){
      return;
    }
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
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
      <ambientLight/>
      <pointLight position={[10, 10, 10]} />
      <Cube />
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
