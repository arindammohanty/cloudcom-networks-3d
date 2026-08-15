"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useTexture, DragControls, RoundedBox } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { useDrag } from '@use-gesture/react';
import * as THREE from 'three';

// Satellite component
function Satellite({ orbitRadius, speed, color, offsetAngle }: { orbitRadius: number, speed: number, color: string, offsetAngle: number }) {
  const pivotRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  
  useFrame((state) => {
    if (pivotRef.current && !isDragging) {
      pivotRef.current.rotation.y = state.clock.getElapsedTime() * speed;
      pivotRef.current.rotation.z = offsetAngle;
    }
    
    // Clamp satellite so it doesn't go inside the earth (Earth radius is 3)
    if (bodyRef.current) {
      const distance = bodyRef.current.position.length();
      if (distance < 3.3) {
        bodyRef.current.position.setLength(3.3);
      }
      // Slowly spin the satellite itself to make it look like it's stabilizing
      bodyRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={pivotRef}>
      <DragControls 
        onDragStart={() => setIsDragging(true)} 
        onDragEnd={() => setIsDragging(false)}
      >
        <group ref={bodyRef} position={[orbitRadius, 0, 0]}>
          <group rotation={[Math.PI / 4, 0, 0]} scale={isDragging ? 1.2 : 1}>
            {/* Main Body - Smooth Rounded Box */}
            <RoundedBox args={[0.15, 0.15, 0.25]} radius={0.04} smoothness={4}>
              <meshStandardMaterial color={isDragging ? "#ffffff" : "#d4af37"} metalness={0.7} roughness={0.4} />
            </RoundedBox>
            
            {/* Left Solar Panel Array */}
            <group position={[-0.35, 0, 0]}>
              {/* Support arm */}
              <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                 <capsuleGeometry args={[0.008, 0.25, 4, 8]} />
                 <meshStandardMaterial color="#888888" metalness={1} roughness={0.2} />
              </mesh>
              {/* Panel */}
              <RoundedBox args={[0.5, 0.015, 0.18]} radius={0.005} smoothness={4}>
                <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
              </RoundedBox>
            </group>
            
            {/* Right Solar Panel Array */}
            <group position={[0.35, 0, 0]}>
              {/* Support arm */}
              <mesh position={[-0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                 <capsuleGeometry args={[0.008, 0.25, 4, 8]} />
                 <meshStandardMaterial color="#888888" metalness={1} roughness={0.2} />
              </mesh>
              {/* Panel */}
              <RoundedBox args={[0.5, 0.015, 0.18]} radius={0.005} smoothness={4}>
                <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
              </RoundedBox>
            </group>
            
            {/* Front Dish Antenna (Smooth Bowl with Rim) */}
            <group position={[0, 0, 0.13]}>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[0.08, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
                <meshStandardMaterial color="#e2e8f0" metalness={0.3} roughness={0.8} side={THREE.DoubleSide} />
              </mesh>
              {/* Smooth rim for the dish so it isn't sharp */}
              <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.024]}>
                <torusGeometry args={[0.076, 0.004, 16, 32]} />
                <meshStandardMaterial color="#cbd5e1" metalness={0.5} roughness={0.5} />
              </mesh>
              {/* Antenna receiver nub (Capsule instead of cylinder) */}
              <mesh position={[0, 0, 0.04]} rotation={[Math.PI / 2, 0, 0]}>
                <capsuleGeometry args={[0.004, 0.06, 4, 8]} />
                <meshStandardMaterial color="#ffffff" />
              </mesh>
            </group>

            {/* Top Long Telemetry Pole Antenna */}
            <mesh position={[0, 0.12, -0.05]}>
              <capsuleGeometry args={[0.002, 0.15, 4, 8]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Side Sensor Cluster (Smooth domes) */}
            <mesh position={[0, -0.075, 0.08]}>
              <sphereGeometry args={[0.025, 16, 16]} />
              <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.4} />
            </mesh>
            
            {/* Glowing Engine/Status Dome */}
            <mesh position={[0, 0, -0.12]}>
              <sphereGeometry args={[0.03, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
          </group>
        </group>
      </DragControls>
    </group>
  );
}

// Earth component
function Earth() {
  const earthGroupRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Load textures (only color map to make it smooth/even, omitting bump/roughness)
  const [colorMap, cloudsMap] = useTexture([
    '/media/earth-blue-marble.jpg',
    '/media/earth_clouds.png'
  ]);

  // Gestures for dragging the earth to rotate it on its axis
  const [{ rotation }, api] = useSpring(() => ({ rotation: [0, 0, 0] }));
  const bind = useDrag(({ offset: [x, y] }) => {
    // Rotation is proportional to pixel drag offset
    api.start({ rotation: [y / 100, x / 100, 0] });
  });

  useFrame((state) => {
    // We add a continuous slow rotation to the drag rotation
    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y = rotation.get()[1] + state.clock.getElapsedTime() * 0.05;
      earthGroupRef.current.rotation.x = rotation.get()[0];
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = state.clock.getElapsedTime() * 0.025;
      cloudsRef.current.rotation.z = state.clock.getElapsedTime() * 0.005;
    }
  });

  return (
    <group position={[3.5, -1.5, 0]} {...(bind() as any)}> 
      {/* Group that spins on its axis */}
      <group ref={earthGroupRef}>
        {/* Base Earth Sphere - Smooth and Even */}
        <mesh>
          <sphereGeometry args={[3, 64, 64]} />
          <meshStandardMaterial 
            map={colorMap}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>

        {/* Atmosphere/Clouds layer */}
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[3.04, 64, 64]} />
          <meshPhongMaterial 
            map={cloudsMap}
            transparent={true}
            opacity={0.3}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Atmospheric Glow */}
        <mesh>
          <sphereGeometry args={[3.15, 64, 64]} />
          <meshPhongMaterial 
            color="#3b82f6" 
            transparent={true} 
            opacity={0.1} 
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
        
        {/* Satellites orbiting */}
        <Satellite orbitRadius={3.8} speed={0.4} color="#60a5fa" offsetAngle={Math.PI / 6} />
        <Satellite orbitRadius={4.5} speed={0.2} color="#a78bfa" offsetAngle={-Math.PI / 4} />
        <Satellite orbitRadius={4.0} speed={0.6} color="#34d399" offsetAngle={Math.PI / 3} />
        <Satellite orbitRadius={5.2} speed={0.3} color="#fbbf24" offsetAngle={-Math.PI / 8} />
        <Satellite orbitRadius={3.5} speed={0.8} color="#f472b6" offsetAngle={Math.PI / 2} />
      </group>
    </group>
  );
}

export function Earth3D() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[-5, 3, 5]} intensity={1.5} />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        
        {/* Removed OrbitControls to prevent rotating the entire scene around the origin */}
      </Canvas>
    </div>
  );
}
