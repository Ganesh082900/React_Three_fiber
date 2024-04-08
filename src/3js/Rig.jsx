import React, { useEffect, useState, useContext } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { CameraControls, OrbitControls } from "@react-three/drei";

import { CameraPosition } from "../App";
import { useGlobalInfo } from "../context/globalContext";
//-------------------------------------------------------------------------------------

export default function Rig(props) {
  const { distance, setDistance, movement, zoom, setZoom, setSlide } = useContext(CameraPosition);
  const meshRef = props.meshRef();
  const { controls, camera } = useThree();
  const context = useGlobalInfo();

 

  const handleScroll = (event) => {
    event.preventDefault();
    // handleCameraZoom(event);
    console.log(event.deltaY,context.index)
    if (context.index == 0 && event.deltaY>0 ) {
      console.log("hellooo")
      setSlide(1)
      controls.setLookAt(0, 0, 5, 0, 1, -100, true);
    }
  };

  React.useEffect(() => {
    console.log("Useeffect");
    if (context.index === 1) {
      console.log(context.index, "index - 1");
      controls?.setLookAt(-6.75, -3.75, 5, 0, 100, -10, true);
    }
    if (context.index === 2) {
      console.log(context.index, "index - 1");
      controls?.setLookAt(-5.75, 3.75, 5, 0, 100, -10, true);
    }
    if (context.index === 4) {
      console.log(context.index, "index - 1");
      controls?.setLookAt(0,0, 5, 0, 100, 0, true);
    }
    if (context.index === 3) {
      console.log(context.index, "index - 1");
      controls?.setLookAt(8.75, 3.75, 5, 0, 100, -10, true);
    }
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [controls, context.index]);

  return (
    <>
      <CameraControls makeDefault dollySpeed={0} />
    </>
  );
}
