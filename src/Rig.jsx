import React, { useEffect, useState, useContext } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { CameraControls, OrbitControls } from "@react-three/drei";

import { CameraPosition } from "./App";
//-------------------------------------------------------------------------------------

export default function Rig(props) {
  const distance = useContext(CameraPosition);

  const meshRef = props.meshRef();
  const { controls, camera } = useThree();

  const [zoom, setZoom] = useState(5);
  useEffect(() => {
    // if (controls != null) {
    //   if (zoom <= 1 || zoom >= 10) {
    //     controls.dollySpeed = 0;
    //   } else {
    //     controls.dollySpeed = 1;
    //   }
    // }
  }, [zoom, controls]);
  // console.log(controls)

  // Function to handle camera zoom
  const handleCameraZoom = (event) => {
    event.preventDefault();
    // Adjust zoom based on scroll direction
    if (event.deltaY < 0) {
      // Scroll up (zoom in)
      setZoom(Math.max(zoom + 0.1, 1)); // Limit to a minimum zoom level
    } else {
      // Scroll down (zoom out)
      setZoom(Math.min(zoom - 0.1, 10)); // Limit to a maximum zoom level
    }

    // Update camera position and zoom
    console.log(zoom, "This is Zoom level ");
    camera.position.set(0, 0, zoom);
    camera.lookAt(meshRef.current.position);
  };

  // Event listener for scroll
  const handleScroll = (event) => {
    event.preventDefault();
    handleCameraZoom(event);
  };

  // Attach event listener
  React.useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [zoom]);

  // Function to handle camera movement (optional)
  const handleCameraMovement = () => {
    // ... (similar to the previous example)
  };

  useFrame(() => {
    // Call additional functions if needed
    handleCameraMovement();
  });

  return (
    <>
      <CameraControls makeDefault />
    </>
  );
}
