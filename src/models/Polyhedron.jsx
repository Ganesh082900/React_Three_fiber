import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function Polyhedron({ position, size, polyhedron, ref1 }) {
  const texture = useTexture("/image/sphere.png");

  // if want to rotate
  useFrame((_, delta) => {
    //   ref.current.rotation.x += delta;
    //   ref.current.rotation.y += 0.5 * delta;
    // });
  });
  return (
    <mesh position={position} ref={ref1} geometry={polyhedron[0]}>
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
