import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Polyhedron from "./3js/models/Polyhedron";
import * as THREE from "three";
import { Html, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Shake from "./3js/graphic/Shake";
import Rig from "./3js/Rig";
import { useRef } from "react";
//-------- content files
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import Prompt from "./components/prompt/Prompt";
import { GlobalProvider, useGlobalInfo } from "./context/globalContext";
//-------------------------------------------------------------------------------------------
export const CameraPosition = React.createContext();
import Tooltip from "../src/3js/tooltip/Tooltip";
import About from "./components/about/About";
import Robot from "./3js/models/Robot";

export default function App() {
  // const [distance, setDistance] = useState(true);
  const [movement, setMovement] = useState(true);

  const [zoom, setZoom] = useState(5);

  const [slide, setSlide] = useState(0);

  const meshRef = useRef();
  const polyhedron = [new THREE.SphereGeometry(2.88)];
  const returnRef = () => {
    return meshRef;
  };
  const context = useGlobalInfo();
  const arr = context.camera[context.index];
  const [cameraIndex, setCameraIndex] = useState(context.index);
  console.log(arr);
  return (
    <>
      <BrowserRouter>
        <CameraPosition.Provider
          value={{
            // distance,
            // setDistance,
            zoom,
            setZoom,
            slide,
            setSlide,
            movement,
          }}
        >
          <Canvas camera={{ position: [0, 0, 350] }}>
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
            <Rig meshRef={returnRef} cameraIndex={parseInt(context.index)} />
          </Canvas>
        </CameraPosition.Provider>
        {/* below is the content to display depend on the distance from the camera  */}

        {slide >= 1 ? <Main /> : <Prompt />}
      </BrowserRouter>

      {/* <Main /> */}
    </>
  );
}
