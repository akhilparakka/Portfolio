import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/computer-transformed.glb");
  return (
    <group {...props} dispose={null} scale={[0.7, 0.7, 0.7]}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[37.08, 36.31, 36.31]}>
          <mesh
            geometry={nodes.Cube027_BLACK_0.geometry}
            material={materials.BLACK}
          />
          <mesh
            geometry={nodes.Cube027_Misk_0.geometry}
            material={materials.Misk}
          />
          <mesh
            geometry={nodes.Cube027_WpalsicC_0.geometry}
            material={materials.WpalsicC}
          />
          <mesh
            geometry={nodes.Cube027_Key_0.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Cube027_Mk_0.geometry}
            material={materials.material_4}
          />
          <mesh
            geometry={nodes.Cube027_WPlasticM_0.geometry}
            material={materials.WPlasticM}
          />
          <mesh
            geometry={nodes.Cube027_BCover_0.geometry}
            material={materials.BCover}
          />
          <mesh
            geometry={nodes.Cube027_Monitor_0.geometry}
            material={materials.Monitor}
          />
          <mesh
            geometry={nodes.Cube027_BplasticC_0.geometry}
            material={materials.BplasticC}
          />
          <mesh
            geometry={nodes.Cube027_RED_0.geometry}
            material={materials.material_9}
          />
          <mesh
            geometry={nodes.Cube027_WplasicD_0.geometry}
            material={materials.WplasicD}
          />
          <mesh
            geometry={nodes.Cube027_Batton11_0.geometry}
            material={materials["Batton1.1"]}
          />
          <mesh
            geometry={nodes.Cube027_Wire_0.geometry}
            material={materials.Wire}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/computer-transformed.glb");
