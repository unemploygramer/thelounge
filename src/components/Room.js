/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 room.gltf
Author: dylanheyes (https://sketchfab.com/dylanheyes)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/modern-bedroom-507aeb748bc04d1ea923cd8bac6783dc
Title: Modern Bedroom
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/room.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2.1, 0, -Math.PI / 2]} scale={0.79}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-242.44, -595.93, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={[29.56, 1864, 88]}
          >
            <mesh
              geometry={nodes.Modern_Bedroom_WindowFrame_0.geometry}
              material={materials.WindowFrame}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Bed_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Mattress_0.geometry}
              material={materials.Mattress}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Trim_0.geometry}
              material={materials.Trim}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Fireplace_0.geometry}
              material={materials.Fireplace}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Fire_0.geometry}
              material={materials.Fire}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Carpet_0.geometry}
              material={materials.Carpet}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Pillows_0.geometry}
              material={materials.Pillows}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Drawer_0.geometry}
              material={materials.Drawer}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Sofa_0.geometry}
              material={materials.Sofa}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_SofaPillows_0.geometry}
              material={materials.SofaPillows}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_FloorLamp_0.geometry}
              material={materials.FloorLamp}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Trim001_0.geometry}
              material={materials["Trim.001"]}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Walls_0.geometry}
              material={materials.Walls}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Ceiling_0.geometry}
              material={materials.Ceiling}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Window_0.geometry}
              material={materials.Window}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_PaintingFrame_0.geometry}
              material={materials.PaintingFrame}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Floor_0.geometry}
              material={materials.Floor}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_FloorLight_0.geometry}
              material={materials.FloorLight}
            />
            <mesh
              geometry={nodes.Modern_Bedroom_Painting_0.geometry}
              material={materials.Painting}
            />
            <mesh
              geometry={nodes.Backdrop_Backdrop_0.geometry}
              material={materials.Backdrop}
              position={[177.38, 0, 19.93]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[34.18, 3.36, 212.04]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/room.gltf");
