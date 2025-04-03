import React from "react";
import "./Main.css";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas, useLoader } from "@react-three/fiber";
import "./Dumbbells3d.css";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Dumbbells3d = () => {
  const gltf = useLoader(GLTFLoader, "/wellify/dumbbells/scene.gltf");
  const dumbbellsRef = useRef();
  useFrame(() => {
    if (dumbbellsRef.current) {
      dumbbellsRef.current.rotation.y += 0.005;
    }
  });
  return (
    <primitive
      ref={dumbbellsRef}
      object={gltf.scene}
      scale={0.01}
      position={[0, 0.23, 0]}
    />
  );
};

const Dumbbells = () => {
  return (
    <section className="dumbbells-section">
      <div className="dumbbells-block">
        <div className="dumbbells-left">
          <div className="dumbbells-text">
            <h1 className="dumbbells-title">
              <span className="dumbbells-blue">Heart</span> so strong,{" "}
              <span className="dumbbells-blue">life</span> so long!
            </h1>
            <h2 className="dumbbells-heading">
              Wellify – твой путь к здоровью и энергии!
            </h2>
            <p className="dumbbells-subtitle">
              Добро пожаловать на Wellify – платформу, созданную для тех, кто
              хочет заботиться о своем здоровье, развивать силу и выносливость,
              а также правильно питаться!
            </p>
          </div>
        </div>

        <Canvas camera={{ position: [65, 10, 0], fov: 4.0 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[505, 500, 500]} intensity={1} />
          <Dumbbells3d />

          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Dumbbells;
