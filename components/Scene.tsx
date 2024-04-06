"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import { Environment } from "@react-three/drei";

function Scene() {
  return (
    <Canvas style={{ background: "#000000" }}>
      <directionalLight intensity={2} position={[0, 2, 3]} />

      <Environment preset="city" />
      <Model />
    </Canvas>
  );
}

export default Scene;
