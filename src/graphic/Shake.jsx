import React from "react";
import { useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { CameraShake } from "@react-three/drei";

export default function Shake() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
//   useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05));
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
    //   rollFrequency={0.4}
    />
  );
}
