export default function Box(props) {
  console.log(props)
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
