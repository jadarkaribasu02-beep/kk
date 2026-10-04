import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { playClickSound, playSuccessSound, playHoverSound } from '../utils/audio';

// 3D Transparent Cat Cutout Mesh that follows the cursor seamlessly
function CatTransparentMesh({ mouse, onCatClick }) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  // Load the extracted transparent PNG cutout of the fluffy cat
  const catTexture = useLoader(THREE.TextureLoader, '/cat-transparent.png');

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      // Smoothly follow the mouse cursor position (x, y)
      const targetX = mouse.current.x * 1.8;
      const targetY = mouse.current.y * 1.2 - 0.2;
      
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.08);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY + Math.sin(t * 2) * 0.08, 0.08);

      // Smooth 3D tilt rotation following cursor direction
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.current.x * 0.4, 0.08);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.current.y * 0.3, 0.08);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mouse.current.x * 0.1, 0.08);

      // Bounce effect on click
      if (bouncing) {
        groupRef.current.position.y += Math.sin(t * 25) * 0.08;
      }
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    playClickSound();
    playSuccessSound();
    setBouncing(true);
    setTimeout(() => setBouncing(false), 700);
    if (onCatClick) onCatClick();
  };

  return (
    <group
      ref={groupRef}
      position={[0, -0.2, 0]}
      scale={hovered ? 2.8 : 2.5}
      onPointerOver={() => { setHovered(true); playHoverSound(); }}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh>
          <planeGeometry args={[2.0, 2.4]} />
          <meshBasicMaterial
            map={catTexture}
            transparent={true}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Orbiting Tech Spheres around the Cat
function OrbitingTechBall({ position, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.22, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Hero3DCanvas({ onCatClick }) {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / innerHeight) * 2 + 1;
  };

  return (
    <div 
      onPointerMove={handlePointerMove}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing z-0"
    >
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.6} color="#ffffff" />
        <directionalLight position={[10, 10, 8]} intensity={2.0} color="#f472b6" />
        <pointLight position={[-10, -5, -5]} intensity={1.5} color="#a855f7" />

        {/* 3D Transparent Cat Cutout following cursor */}
        <React.Suspense fallback={null}>
          <CatTransparentMesh mouse={mouse} onCatClick={onCatClick} />
        </React.Suspense>

        {/* Orbiting Tech Spheres */}
        <OrbitingTechBall position={[-2.8, 1.2, 0]} color="#f97316" />
        <OrbitingTechBall position={[2.8, 1.2, 0]} color="#38bdf8" />
        <OrbitingTechBall position={[-2.6, -1.5, 0]} color="#a855f7" />
        <OrbitingTechBall position={[2.6, -1.5, 0]} color="#ec4899" />

        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.6} minPolarAngle={Math.PI / 2.8} />
      </Canvas>
    </div>
  );
}
