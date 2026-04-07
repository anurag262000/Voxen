"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function Scene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00FF9C" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#7000FF" />
          
          <Barbell />
          <FloatingOrbs />
          
          <Environment preset="night" />
          <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.25} far={10} color="#080808" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Barbell() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const scroll = window.scrollY;
    const progress = Math.min(scroll / (document.documentElement.scrollHeight - window.innerHeight), 1);
    
    // Scroll-bound 3D rep physics
    meshRef.current.position.y = Math.sin(progress * Math.PI * 10) * 0.5;
    meshRef.current.rotation.z = Math.sin(progress * Math.PI * 2) * 0.1;
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Barbell primitives for performance */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 4, 12]} />
        <meshPhysicalMaterial color="#333" metalness={1} roughness={0.1} />
      </mesh>
      
      {/* Weight Plates */}
      <WeightPlate position={[-1.2, 0, 0]} />
      <WeightPlate position={[-1.4, 0, 0]} />
      <WeightPlate position={[1.2, 0, 0]} />
      <WeightPlate position={[1.4, 0, 0]} />
    </group>
  );
}

function WeightPlate({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.5, 0.5, 0.15, 32]} />
      <meshPhysicalMaterial color="#111" metalness={0.6} roughness={0.4} />
      
      {/* Glowing Kinetic Ring */}
      <mesh position={[0, -0.01, 0]}>
        <torusGeometry args={[0.45, 0.01, 16, 32]} />
        <meshBasicMaterial color="#00FF9C" />
      </mesh>
    </mesh>
  );
}

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.5;
  });

  return (
    <group ref={groupRef}>
      {[...Array(4)].map((_, i) => (
        <Float 
          key={i}
          speed={2} 
          rotationIntensity={2} 
          floatIntensity={2}
          position={[
            Math.cos(i * Math.PI / 2) * 3,
            Math.sin(i * Math.PI / 2) * 1.5,
            -2
          ]}
        >
          <Sphere args={[0.3, 32, 32]}>
            <MeshDistortMaterial
              color={i % 2 === 0 ? "#00FF9C" : "#7000FF"}
              speed={3}
              distort={0.4}
              radius={1}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}
