export default function Lights() {
  return (
    <>
      <ambientLight intensity={10} />
      <directionalLight />
      <pointLight />
      <spotLight />
    </>
  );
}
