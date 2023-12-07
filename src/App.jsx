import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Polyhedron from "./models/Polyhedron";
import * as THREE from "three";
import { Html, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Shake from "./graphic/Shake";
import Rig from "./Rig";
import { useRef } from "react";
//-------- content files
import LandingPage from "./landingpage/LandingPage";
import About from "./about/About";
import Contact from "./contact/Contact";
//-------------------------------------------------------------------------------------------
export const CameraPosition = React.createContext();

export default function App() {
  const [distance, setDistance] = useState(5);
  const [movement, setMovement] = useState(2);

  const meshRef = useRef();
  const polyhedron = [new THREE.SphereGeometry(2.88)];
  const returnRef = () => {
    return meshRef;
  };
  console.log(returnRef());
  console.log(polyhedron, "This is position");
  return (
    <>
      <CameraPosition.Provider value={(distance, movement)}>
        <Canvas camera={{ position: [-100, 100, 1000] }}>
          <color attach="background" args={["black"]} />
          <Stars saturation={2} count={1000} speed={5.5} fade />
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
          </EffectComposer>
          <Polyhedron position={[-6.75, -3.75, 0]} polyhedron={polyhedron} />
          <Polyhedron position={[-5.75, 3.75, 0]} polyhedron={polyhedron} />
          <Polyhedron
            position={[0, 0, 0]}
            polyhedron={polyhedron}
            ref1={meshRef}
          />
          <Polyhedron position={[8.75, 3.75, 0]} polyhedron={polyhedron} />
          <Shake />
          <Rig meshRef={returnRef} />
        </Canvas>
        {/* below is the content to display depend on the distance from the camera  */}
         {/* <LandingPage />  */}
        {/* <About /> */}
        {/* <Contact /> */}
      </CameraPosition.Provider>
    </>
  );
}
