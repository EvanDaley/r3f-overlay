import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const filePath = window.location.href + '/models/GlassExperimentation.glb'

export default function Glass(props) {
  const texture = useTexture(window.location.href + '/images/flakes.png')

  const materialProps = {
    clearcoat: 1.0,
    clearcoatRoughness: 0,
    metalness: 0.65,
    roughness: 0.3,
    color: 'blue',
    normalMap: texture,
    normalScale: [0.3, 0.3],
    'normalMap-wrapS': THREE.RepeatWrapping,
    'normalMap-wrapT': THREE.RepeatWrapping,
    'normalMap-repeat': [30, 30],
    'normalMap-anisotropy': 16,
    transmission: 0.99,
    transparent: true
  }

  const group = useRef()
  const { nodes, materials } = useGLTF(filePath)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      >
        <meshPhysicalMaterial {...materialProps} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[0, 0, -3.72]}
      >
        <meshPhysicalMaterial {...materialProps}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[0, 0, 3.26]}
        scale={[1.48, 1.48, 1.48]}
      >
        <meshPhysicalMaterial {...materialProps} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0, 0, -7.14]}
      >
        <meshPhysicalMaterial {...materialProps}  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[0, 0, -3.72]}
      >
        <meshPhysicalMaterial {...materialProps}  />
      </mesh>
    </group>
  )
}

useGLTF.preload(filePath)
