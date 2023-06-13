import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Vector3 } from "three";

const vec = new Vector3();

const Rig = () => {
  return useFrame(({ camera, mouse }) => {
    vec.set(-mouse.x * 2, -mouse.y * 0.3, camera.position.z);
    camera.position.lerp(vec, 0.03);
    camera.lookAt(0, 0, 0);
  });
};

const Model = ({ url }) => {
  const ref = useRef();

  const { scene } = useGLTF(url);
  const camera = new THREE.PerspectiveCamera(45, 1000, 100, 2000);

  scene.add(camera);
  return (
    <primitive
      ref={ref}
      position={[-5, -2, 10]}
      rotation={[0, -30.2, 0]}
      object={scene}
    />
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ fov: 40, near: 0.1, far: 1000, position: [0, 0, 15] }}>
      <Environment
        files="./img/pizzo_pernice_puresky_1k.hdr"
        background={false}
      />
      <Model url={"./models/KB3.glb"} />
      <Rig />
    </Canvas>
  );
};

export default Scene;
