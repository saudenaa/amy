import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

// ── Node data — label, target section, 3-D position, pulse phase ─────────────
const NODES = [
  { id: "kroger",   label: "Kroger\nDispatch Hub",    section: "work",      pos: [-1.9,  0.7,  0.4],  phase: 0.0 },
  { id: "leave",    label: "Leave Tracker",            section: "work",      pos: [ 1.6,  0.9, -0.5],  phase: 1.1 },
  { id: "click",    label: "ClickSnitch",              section: "projects",  pos: [ 0.3, -1.6,  0.9],  phase: 2.1 },
  { id: "nasa",     label: "NASA Space Apps",          section: "volunteer", pos: [-1.6, -0.8, -1.1],  phase: 3.2 },
  { id: "ai",       label: "AI / Bio\nResearch Lab",   section: "projects",  pos: [ 0.8,  1.9,  0.1],  phase: 4.2 },
  { id: "bearcat",  label: "Bearcat\nBeginnings",      section: "volunteer", pos: [-0.4, -0.2,  2.0],  phase: 5.3 },
];

// Edges: pairs of node indices
const EDGES = [
  [0, 1],  // Kroger ↔ Leave Tracker (same employer)
  [0, 4],  // Kroger ↔ AI Research (technical bridge)
  [1, 4],  // Leave Tracker ↔ AI Research (data work)
  [2, 4],  // ClickSnitch ↔ AI Research (ML)
  [2, 5],  // ClickSnitch ↔ Bearcat (community tech)
  [3, 5],  // NASA ↔ Bearcat (community leadership)
  [0, 3],  // Kroger ↔ NASA (organizational scale)
  [1, 2],  // Leave Tracker ↔ ClickSnitch (shipped products)
];

// ── Single pulsing node ───────────────────────────────────────────────────────
function NetworkNode({ node, onNodeClick }) {
  const meshRef   = useRef();
  const glowRef   = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const pulse = Math.sin(t * 1.6 + node.phase) * 0.5 + 0.5;

    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = hovered
        ? 1.8
        : 0.45 + pulse * 0.55;
      const s = hovered ? 1.35 : 1 + pulse * 0.09;
      meshRef.current.scale.setScalar(s);
    }
    if (glowRef.current) {
      glowRef.current.material.opacity = hovered ? 0.14 : 0.04 + pulse * 0.06;
    }
  });

  const handleClick = () => {
    const el = document.getElementById(node.section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (onNodeClick) onNodeClick(node.section);
  };

  return (
    <group position={node.pos}>
      {/* Main sphere */}
      <mesh
        ref={meshRef}
        onPointerOver={() => { setHovered(true);  document.body.style.cursor = "pointer"; }}
        onPointerOut={() =>  { setHovered(false); document.body.style.cursor = "default"; }}
        onClick={handleClick}
      >
        <sphereGeometry args={[0.17, 28, 28]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.35}
        />
      </mesh>

      {/* Outer glow shell */}
      <mesh ref={glowRef} scale={2.2}>
        <sphereGeometry args={[0.17, 16, 16]} />
        <meshStandardMaterial
          color="#38BDF8"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Label — always visible */}
      <Html center distanceFactor={9} style={{ pointerEvents: "none" }}>
        <div
          style={{
            background: "rgba(10,15,30,0.82)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${hovered ? "#38BDF8" : "rgba(56,189,248,0.25)"}`,
            borderRadius: "7px",
            padding: "5px 10px",
            color: hovered ? "#38BDF8" : "#E8EDF5",
            fontSize: "10.5px",
            fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            whiteSpace: "pre",
            textAlign: "center",
            lineHeight: 1.4,
            marginTop: "26px",
            boxShadow: hovered ? "0 4px 16px rgba(56,189,248,0.22)" : "none",
            transition: "all 0.2s ease",
            userSelect: "none",
          }}
        >
          {node.label}
        </div>
      </Html>
    </group>
  );
}

// ── Animated edge between two nodes ──────────────────────────────────────────
function NetworkEdge({ startPos, endPos, phase }) {
  const ref = useRef();

  const geometry = useMemo(() => {
    const pts = [new THREE.Vector3(...startPos), new THREE.Vector3(...endPos)];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [startPos, endPos]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.elapsedTime;
      ref.current.material.opacity = 0.1 + Math.sin(t * 1.3 + phase) * 0.1;
    }
  });

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#38BDF8" transparent opacity={0.15} />
    </line>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function NetworkGraph({ onNodeClick }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4,  4,  4]} intensity={0.9} color="#38BDF8" />
      <pointLight position={[-4, -3, -3]} intensity={0.4} color="#7DD3FC" />

      {/* Edges */}
      {EDGES.map(([i, j], idx) => (
        <NetworkEdge
          key={idx}
          startPos={NODES[i].pos}
          endPos={NODES[j].pos}
          phase={idx * 0.8}
        />
      ))}

      {/* Nodes */}
      {NODES.map((node) => (
        <NetworkNode key={node.id} node={node} onNodeClick={onNodeClick} />
      ))}

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.6}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}
