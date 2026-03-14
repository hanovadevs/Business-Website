import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 150 }) {
  const mesh = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return { positions };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00B4D8"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingShapes() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.003;
        child.rotation.x = state.clock.elapsedTime * 0.2 + i;
        child.rotation.z = state.clock.elapsedTime * 0.15 + i * 0.5;
      });
    }
  });

  return (
    <group ref={group}>
      <mesh position={[-3, 1, -2]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#00B4D8" transparent opacity={0.15} wireframe />
      </mesh>
      <mesh position={[3.5, -1, -3]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#0077B6" transparent opacity={0.12} wireframe />
      </mesh>
      <mesh position={[0, 2.5, -4]}>
        <torusGeometry args={[0.7, 0.2, 16, 32]} />
        <meshStandardMaterial color="#90E0EF" transparent opacity={0.1} wireframe />
      </mesh>
      <mesh position={[-4, -2, -5]}>
        <dodecahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#00D4FF" transparent opacity={0.1} wireframe />
      </mesh>
      <mesh position={[4, 2, -6]}>
        <torusKnotGeometry args={[0.4, 0.15, 64, 8]} />
        <meshStandardMaterial color="#00B4D8" transparent opacity={0.08} wireframe />
      </mesh>
    </group>
  );
}

function GlowRing() {
  const ring = useRef();

  useFrame((state) => {
    if (ring.current) {
      ring.current.rotation.z = state.clock.elapsedTime * 0.1;
      ring.current.rotation.x = Math.PI / 3;
    }
  });

  return (
    <mesh ref={ring} position={[0, 0, -5]}>
      <torusGeometry args={[3, 0.02, 16, 100]} />
      <meshBasicMaterial color="#00B4D8" transparent opacity={0.3} />
    </mesh>
  );
}

const ParticleBackground = ({ className = '' }) => {
  return (
    <div className={`particle-bg ${className}`} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00B4D8" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#0077B6" />
        <Particles count={150} />
        <FloatingShapes />
        <GlowRing />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
