import React, { useMemo, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

// ---------------------------------------------
// NODE COMPONENT (with hover + label + click)
// ---------------------------------------------
function Node({ position, color, link, label }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    meshRef.current.scale.setScalar(hovered ? 1.45 : 1);
  });

  return (
    <group position={position}>
      {/* clickable sphere */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => link && window.open(link, "_blank")}
        style={{ cursor: link ? "pointer" : "default" }}
      >
        <sphereGeometry args={[0.16, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={hovered ? color : "#000"}
          emissiveIntensity={hovered ? 1.2 : 0}
        />
      </mesh>

      {/* label that shows ONLY on hover */}
      {hovered && (
        <Html distanceFactor={10}>
          <div
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: "12px",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.2)",
              whiteSpace: "nowrap",
              marginTop: "-8px"
            }}
          >
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}

// ---------------------------------------------------------
// MAIN GRAPH WITH FEWER LINES + LABELS + CLEAN LOOK
// ---------------------------------------------------------
export default function GalaxyGraph() {
  const clickableNodes = [
    { title: "ClickSnitch", link: "https://your-clicksnitch.com" },
    { title: "NASA Space Apps", link: "https://spaceappschallenge.org" },
    { title: "PowerBI Dashboards", link: "https://your-dashboard.com" },
    { title: "GitHub", link: "https://github.com/saudenaa" },
    { title: "LinkedIn", link: "https://linkedin.com/in/amysauden" }
  ];

  const { nodes, lines } = useMemo(() => {
    const nodes = [];
    const lines = [];

    // generate nodes
    for (let i = 0; i < 40; i++) {
      nodes.push({
        position: [
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 4.5,
          (Math.random() - 0.5) * 4.5
        ],
        clickable: i < clickableNodes.length,
        link: clickableNodes[i]?.link || null,
        label: clickableNodes[i]?.title || "",
        color: i < clickableNodes.length ? "#ff2a7b" : "#cccccc"
      });
    }

    // generate fewer lines (only 3–4% of all possible)
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.965) continue; // <<< REDUCED WIRES HERE

        const start = new THREE.Vector3(...nodes[i].position);
        const end = new THREE.Vector3(...nodes[j].position);
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        lines.push(geometry);
      }
    }

    return { nodes, lines };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.1} />

        {/* lines */}
        {lines.map((geo, i) => (
          <line key={i} geometry={geo}>
            <lineBasicMaterial
              color="#666"
              transparent
              opacity={0.28}
            />
          </line>
        ))}

        {/* nodes */}
        {nodes.map((n, i) => (
          <Node
            key={i}
            position={n.position}
            color={n.color}
            link={n.link}
            label={n.label}
          />
        ))}

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          rotateSpeed={0.55}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
