"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { Group, MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";

function StudioCar({ frozen }: { frozen: boolean }) {
  const group = useRef<Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (frozen) return;
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      target.current.x = ny * 0.18;
      target.current.y = nx * 0.26;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [frozen]);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    if (frozen) {
      g.rotation.y += delta * 0.12;
      return;
    }
    g.rotation.x += (target.current.x - g.rotation.x) * 0.06;
    g.rotation.y += (target.current.y + Math.sin(performance.now() / 2400) * 0.15 - g.rotation.y) * 0.05;
  });

  const gold = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#c9a227",
        metalness: 0.92,
        roughness: 0.22,
      }),
    [],
  );
  const body = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#cfcfd4",
        metalness: 0.85,
        roughness: 0.18,
      }),
    [],
  );
  const dark = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#111111",
        metalness: 0.6,
        roughness: 0.4,
      }),
    [],
  );

  /* [PLACEHOLDER - reemplazar con modelo 3D real o escaneo del vehículo insignia del cliente] */
  return (
    <group ref={group} position={[0, 0.15, 0]} scale={1.15}>
      <mesh material={body} position={[0, 0.22, 0]}>
        <boxGeometry args={[2.2, 0.28, 1.05]} />
      </mesh>
      <mesh material={body} position={[0.05, 0.52, 0]}>
        <boxGeometry args={[1.15, 0.38, 0.92]} />
      </mesh>
      <mesh material={dark} position={[0.08, 0.58, 0]}>
        <boxGeometry args={[0.95, 0.22, 0.88]} />
      </mesh>
      <mesh material={gold} position={[1.12, 0.18, 0]}>
        <boxGeometry args={[0.18, 0.08, 0.86]} />
      </mesh>
      {[
        [-0.72, 0.12, 0.52],
        [0.72, 0.12, 0.52],
        [-0.72, 0.12, -0.52],
        [0.72, 0.12, -0.52],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]} rotation={[Math.PI / 2, 0, 0]} material={dark}>
          <cylinderGeometry args={[0.2, 0.2, 0.12, 18]} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroCanvas({ frozen }: { frozen: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [2.6, 1.4, 4.2], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <fog attach="fog" args={["#0a0a0a", 6, 14]} />
      <ambientLight intensity={0.18} />
      <directionalLight position={[4, 6, 2]} intensity={1.4} color="#e8c766" />
      <directionalLight position={[-3, 2, -4]} intensity={0.55} color="#8ab4ff" />
      <StudioCar frozen={frozen} />
      <ContactShadows opacity={0.45} scale={12} blur={2.4} far={4} color="#000" />
      <Environment preset="night" />
    </Canvas>
  );
}
