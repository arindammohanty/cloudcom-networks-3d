"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, MeshTransmissionMaterial, Sparkles, TorusKnot, Icosahedron, Octahedron, RoundedBox, Sphere, Torus, Box, Cylinder, Circle } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { useDrag } from '@use-gesture/react';
import * as THREE from 'three';

// ----------------------------------------------------------------------
// Specific 3D Models for Subpages - Premium Abstract Geometry
// ----------------------------------------------------------------------

function CompanyModel() {
  const groupRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current && leftArmRef.current && rightArmRef.current && leftLegRef.current && rightLegRef.current && torsoRef.current) {
      const t = state.clock.getElapsedTime();
      
      // Floating & Breathing
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.05 - 0.2;
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
      
      // Torso slight twist
      torsoRef.current.rotation.y = Math.sin(t) * 0.1;
      
      // Walking / Active Animation Simulation
      const walkCycle = t * 2.5;
      leftArmRef.current.rotation.x = Math.sin(walkCycle) * 0.25;
      rightArmRef.current.rotation.x = Math.sin(walkCycle + Math.PI) * 0.25;
      
      leftLegRef.current.rotation.x = Math.sin(walkCycle + Math.PI) * 0.15;
      rightLegRef.current.rotation.x = Math.sin(walkCycle) * 0.15;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -0.2, 0]}>
        
        {/* Floating Glass Base */}
        <Cylinder args={[2.5, 2.8, 0.1, 64]} position={[0, -2.5, 0]}>
           <MeshTransmissionMaterial transmission={0.9} thickness={0.5} roughness={0.1} color="#f8fafc" />
        </Cylinder>
        
        {/* Core Character Group */}
        <group ref={torsoRef} position={[0, 0, 0]}>
          
          {/* Head (Smooth) */}
          <group position={[0, 1.3, 0]}>
            <mesh>
              <sphereGeometry args={[0.35, 64, 64]} />
              <meshStandardMaterial color="#fcd34d" roughness={0.3} metalness={0.1} />
            </mesh>
            {/* High-tech Glasses */}
            <mesh position={[0, 0.05, 0.32]} rotation={[0, 0, 0]}>
              <boxGeometry args={[0.45, 0.12, 0.1]} />
              <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1} />
            </mesh>
          </group>

          {/* Neck */}
          <mesh position={[0, 0.9, 0]}>
            <cylinderGeometry args={[0.1, 0.15, 0.3, 32]} />
            <meshStandardMaterial color="#fcd34d" roughness={0.4} />
          </mesh>
          
          {/* Torso (Suit Jacket) using Capsule for smooth organic shoulders */}
          <mesh position={[0, 0.2, 0]}>
            <capsuleGeometry args={[0.45, 0.9, 32, 64]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.6} metalness={0.1} />
          </mesh>

          {/* Glowing Tie / Core */}
          <mesh position={[0, 0.4, 0.43]} rotation={[0.1, 0, 0]}>
            <boxGeometry args={[0.1, 0.7, 0.05]} />
            <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.8} />
          </mesh>

          {/* Left Arm (Articulated Capsule) */}
          <group ref={leftArmRef} position={[-0.55, 0.5, 0]}>
            <mesh position={[0, -0.4, 0]}>
              <capsuleGeometry args={[0.12, 0.7, 16, 32]} />
              <meshStandardMaterial color="#f8fafc" roughness={0.6} />
            </mesh>
            {/* Hand */}
            <mesh position={[0, -0.9, 0]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial color="#fcd34d" />
            </mesh>
          </group>

          {/* Right Arm (Articulated Capsule) */}
          <group ref={rightArmRef} position={[0.55, 0.5, 0]}>
            <mesh position={[0, -0.4, 0]}>
              <capsuleGeometry args={[0.12, 0.7, 16, 32]} />
              <meshStandardMaterial color="#f8fafc" roughness={0.6} />
            </mesh>
            {/* Hand holding floating datapad */}
            <mesh position={[0, -0.9, 0]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial color="#fcd34d" />
            </mesh>
            {/* Datapad */}
            <mesh position={[0.1, -1.2, 0.2]} rotation={[-0.5, -0.2, 0]}>
              <boxGeometry args={[0.4, 0.05, 0.5]} />
              <meshStandardMaterial color="#0f172a" metalness={0.8} />
            </mesh>
            {/* Datapad Screen */}
            <mesh position={[0.1, -1.18, 0.2]} rotation={[-0.5, -0.2, 0]}>
               <planeGeometry args={[0.35, 0.45]} />
               <meshBasicMaterial color="#38bdf8" />
            </mesh>
          </group>
          
          {/* Hips / Lower body transition */}
          <mesh position={[0, -0.35, 0]}>
             <sphereGeometry args={[0.42, 32, 32]} />
             <meshStandardMaterial color="#1e293b" />
          </mesh>

          {/* Left Leg */}
          <group ref={leftLegRef} position={[-0.2, -0.4, 0]}>
            <mesh position={[0, -0.7, 0]}>
              <capsuleGeometry args={[0.15, 0.9, 16, 32]} />
              <meshStandardMaterial color="#1e293b" roughness={0.8} />
            </mesh>
            {/* Shoe */}
            <mesh position={[0, -1.3, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
              <capsuleGeometry args={[0.15, 0.2, 16, 32]} />
              <meshStandardMaterial color="#020617" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>

          {/* Right Leg */}
          <group ref={rightLegRef} position={[0.2, -0.4, 0]}>
            <mesh position={[0, -0.7, 0]}>
              <capsuleGeometry args={[0.15, 0.9, 16, 32]} />
              <meshStandardMaterial color="#1e293b" roughness={0.8} />
            </mesh>
            {/* Shoe */}
            <mesh position={[0, -1.3, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
              <capsuleGeometry args={[0.15, 0.2, 16, 32]} />
              <meshStandardMaterial color="#020617" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>

        </group>

        {/* Orbiting Tech Particles */}
        <Torus args={[2, 0.01, 16, 100]} position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]}>
           <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1} />
        </Torus>
        <Torus args={[2.5, 0.01, 16, 100]} position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]}>
           <meshStandardMaterial color="#fcd34d" emissive="#fcd34d" emissiveIntensity={0.5} />
        </Torus>

      </group>
      <Sparkles count={100} scale={6} size={2.5} color="#38bdf8" />
    </Float>
  );
}

function SolutionsModel() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const { vertices4D, edges } = React.useMemo(() => {
    const v = [];
    for (let i = 0; i < 16; i++) {
      v.push([
        (i & 1) ? 1 : -1,
        (i & 2) ? 1 : -1,
        (i & 4) ? 1 : -1,
        (i & 8) ? 1 : -1,
      ]);
    }
    const e = [];
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 4; j++) {
        const neighbor = i ^ (1 << j);
        if (i < neighbor) {
          e.push([i, neighbor]);
        }
      }
    }
    return { vertices4D: v, edges: e };
  }, []);

  const { lineGeo, pointsGeo } = React.useMemo(() => {
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(edges.length * 2 * 3), 3));
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(16 * 3), 3));
    return { lineGeo: lGeo, pointsGeo: pGeo };
  }, [edges]);

  useFrame((state) => {
    if (lineRef.current && pointsRef.current) {
      const rotX = state.clock.getElapsedTime() * 0.2;
      const rotY = state.clock.getElapsedTime() * 0.3;
      lineRef.current.rotation.set(rotX, rotY, 0);
      pointsRef.current.rotation.set(rotX, rotY, 0);
      
      const t = state.clock.getElapsedTime() * 0.8;
      const cosXW = Math.cos(t);
      const sinXW = Math.sin(t);
      // Slightly different speed for ZW to make the folding organic and complex
      const cosZW = Math.cos(t * 0.6); 
      const sinZW = Math.sin(t * 0.6);
      
      const linePositions = lineGeo.attributes.position.array as Float32Array;
      const pointPositions = pointsGeo.attributes.position.array as Float32Array;
      
      const projected = vertices4D.map(v => {
        let x = v[0], y = v[1], z = v[2], w = v[3];
        
        // 4D Rotation in XW plane
        let nx = x * cosXW - w * sinXW;
        let nw = x * sinXW + w * cosXW;
        x = nx; w = nw;
        
        // 4D Rotation in ZW plane
        let nz = z * cosZW - w * sinZW;
        nw = z * sinZW + w * cosZW;
        z = nz; w = nw;
        
        // Stereographic Projection to 3D
        const distance = 2.5;
        const factor = 1.2 / (distance - w);
        return [x * factor, y * factor, z * factor];
      });

      // Update Points (Nodes)
      for (let i = 0; i < 16; i++) {
        pointPositions[i * 3] = projected[i][0];
        pointPositions[i * 3 + 1] = projected[i][1];
        pointPositions[i * 3 + 2] = projected[i][2];
      }

      // Update Lines (Edges)
      let idx = 0;
      for (let i = 0; i < edges.length; i++) {
        const p1 = projected[edges[i][0]];
        const p2 = projected[edges[i][1]];
        
        linePositions[idx++] = p1[0];
        linePositions[idx++] = p1[1];
        linePositions[idx++] = p1[2];
        
        linePositions[idx++] = p2[0];
        linePositions[idx++] = p2[1];
        linePositions[idx++] = p2[2];
      }
      
      lineGeo.attributes.position.needsUpdate = true;
      pointsGeo.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={1.5}>
      <lineSegments ref={lineRef}>
        <primitive object={lineGeo} attach="geometry" />
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.8} />
      </lineSegments>
      <points ref={pointsRef}>
        <primitive object={pointsGeo} attach="geometry" />
        <pointsMaterial color="#bae6fd" size={0.1} sizeAttenuation />
      </points>
      
      <Sparkles count={50} scale={3} size={2} color="#7dd3fc" />
    </Float>
  );
}

function IndustriesModel() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={groupRef}>
        {/* Outer Wireframe */}
        <Icosahedron args={[2, 2]}>
          <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
        </Icosahedron>
        {/* Middle Glass Layer */}
        <Sphere args={[1.5, 32, 32]}>
          <MeshTransmissionMaterial transmission={0.9} thickness={0.5} color="#0f172a" roughness={0.1} />
        </Sphere>
        {/* Inner Glowing Core */}
        <Icosahedron args={[0.8, 1]}>
          <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.8} />
        </Icosahedron>
      </group>
      <Sparkles count={60} scale={5} size={3} color="#34d399" />
    </Float>
  );
}

function ResourcesModel() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Bookshelf Frame */}
        <Box args={[2, 0.1, 0.8]} position={[0, -1, 0]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>
        <Box args={[2, 0.1, 0.8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>
        <Box args={[2, 0.1, 0.8]} position={[0, 1, 0]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>
        <Box args={[0.1, 2.1, 0.8]} position={[-0.95, 0, 0]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>
        <Box args={[0.1, 2.1, 0.8]} position={[0.95, 0, 0]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>
        
        {/* Books on Bottom Shelf */}
        <Box args={[0.2, 0.8, 0.6]} position={[-0.6, -0.55, 0]} rotation={[0, 0, 0.1]}>
          <meshStandardMaterial color="#3b82f6" />
        </Box>
        <Box args={[0.15, 0.7, 0.6]} position={[-0.3, -0.6, 0]}>
          <meshStandardMaterial color="#34d399" />
        </Box>
        <Box args={[0.25, 0.8, 0.6]} position={[0.5, -0.55, 0]}>
          <meshStandardMaterial color="#f43f5e" />
        </Box>
        
        {/* Books on Top Shelf */}
        <Box args={[0.2, 0.7, 0.6]} position={[0.2, 0.45, 0]} rotation={[0, 0, -0.2]}>
          <meshStandardMaterial color="#d4af37" />
        </Box>
        <Box args={[0.18, 0.8, 0.6]} position={[-0.5, 0.45, 0]}>
          <meshStandardMaterial color="#8b5cf6" />
        </Box>
        <Box args={[0.2, 0.8, 0.6]} position={[-0.7, 0.45, 0]}>
          <meshStandardMaterial color="#3b82f6" />
        </Box>
        
        {/* Glowing Data Core/Globe on Top */}
        <Sphere args={[0.3, 32, 32]} position={[0, 1.4, 0]}>
          <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.8} />
        </Sphere>
      </group>
      <Sparkles count={30} scale={3} size={2} color="#93c5fd" />
    </Float>
  );
}

function PartnersModel() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
      {/* Central Core */}
      <Sphere args={[0.6, 32, 32]}>
        <MeshTransmissionMaterial transmission={0.9} thickness={1} color="#ffffff" roughness={0.1} />
      </Sphere>
      
      {/* Orbiting Elements */}
      <group ref={groupRef}>
        {[0, 1, 2].map((i) => {
          const angle = (i / 3) * Math.PI * 2;
          return (
            <group key={i} position={[Math.cos(angle) * 1.8, 0, Math.sin(angle) * 1.8]}>
              <Octahedron args={[0.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
                <meshStandardMaterial color={["#3b82f6", "#34d399", "#d4af37"][i]} metalness={0.8} roughness={0.2} />
              </Octahedron>
            </group>
          );
        })}
      </group>
      {/* Connecting Ring */}
      <Torus args={[1.8, 0.02, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
         <meshStandardMaterial color="#cbd5e1" transparent opacity={0.3} />
      </Torus>
    </Float>
  );
}

function SupportModel() {
  const meshRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
      <group ref={meshRef}>
        {/* Outer Shield - Bright Glowing Wireframe */}
        <Icosahedron args={[2, 2]}>
          <meshStandardMaterial 
            color="#60a5fa" 
            emissive="#3b82f6"
            emissiveIntensity={0.5}
            wireframe 
            transparent 
            opacity={0.8} 
          />
        </Icosahedron>
        
        {/* Inner Solid Core - Bright Glass */}
        <Octahedron args={[1.2, 0]}>
          <MeshTransmissionMaterial 
            transmission={0.95} 
            thickness={1} 
            roughness={0.05} 
            color="#e2e8f0" 
          />
        </Octahedron>
        
        {/* Deep Glowing Center */}
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#34d399" 
            emissiveIntensity={2} 
          />
        </Sphere>
      </group>
      <Sparkles count={50} scale={5} size={3} color="#60a5fa" />
    </Float>
  );
}

function ContactModel() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        child.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime() * 2 - i) * 0.1);
      });
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={group} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        {[1, 1.5, 2, 2.5].map((radius, i) => (
          <Torus key={i} args={[radius, 0.02, 32, 100]}>
            <meshBasicMaterial color="#3b82f6" transparent opacity={1 - i * 0.25} />
          </Torus>
        ))}
        <Sphere args={[0.6, 32, 32]}>
          <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.8} />
        </Sphere>
      </group>
      <Sparkles count={40} scale={5} size={2} color="#60a5fa" />
    </Float>
  );
}

function CareersModel() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={groupRef} position={[0, -1.5, 0]}>
        {[...Array(15)].map((_, i) => {
          const angle = (i / 15) * Math.PI * 4;
          const y = (i / 15) * 3;
          const radius = 1.2;
          return (
            <group key={i} position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]}>
              <Box args={[0.6, 0.1, 0.4]} rotation={[0, -angle, 0]}>
                 <meshStandardMaterial color={i % 2 === 0 ? "#3b82f6" : "#34d399"} metalness={0.6} roughness={0.2} />
              </Box>
            </group>
          );
        })}
      </group>
      <Sparkles count={50} scale={[2, 4, 2]} size={3} color="#fcd34d" speed={2} />
    </Float>
  );
}

// ----------------------------------------------------------------------
// Main Container component
// ----------------------------------------------------------------------

function InteractiveModel({ model }: { model: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Gestures for dragging to rotate
  const [{ rotation }, api] = useSpring(() => ({ rotation: [0, 0, 0] }));
  const bind = useDrag(({ offset: [x, y] }) => {
    api.start({ rotation: [y / 100, x / 100, 0] });
  });

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation.get()[1];
      groupRef.current.rotation.x = rotation.get()[0];
    }
  });

  return (
    <group position={[0, 0, 0]} {...(bind() as any)}>
      <group ref={groupRef}>
        {model}
      </group>
    </group>
  );
}

export function Subpage3D({ type }: { type: 'company' | 'solutions' | 'industries' | 'resources' | 'partners' | 'careers' | 'support' | 'contact' }) {
  const renderModel = () => {
    switch(type) {
      case 'company': return <CompanyModel />;
      case 'solutions': return <SolutionsModel />;
      case 'industries': return <IndustriesModel />;
      case 'resources': return <ResourcesModel />;
      case 'partners': return <PartnersModel />;
      case 'careers': return <CareersModel />;
      case 'support': return <SupportModel />;
      case 'contact': return <ContactModel />;
      default: return <CompanyModel />;
    }
  };

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[-5, 3, 5]} intensity={1.5} />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <Suspense fallback={null}>
          <InteractiveModel model={renderModel()} />
        </Suspense>
      </Canvas>
    </div>
  );
}
