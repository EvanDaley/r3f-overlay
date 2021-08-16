import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, MeshDistortMaterial, Shadow } from '@react-three/drei'
// import Text from './Text'
import mouseState from '../../../mouseState'

const filePath = window.location.href + '/models/geo.min.glb'

export default function Model(props) {
  const group = useRef()
  const shadow = useRef()
  const { nodes } = useGLTF(filePath, true)

  console.log(nodes)
  const xMoveFactor = 8
  const yMoveFactor = 2

  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2
    const destinationY = (t / 4) - ((mouseState.mouse[1] / 2) * yMoveFactor) + .5
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, destinationY, 0.05)

    shadow.current.scale.y = shadow.current.scale.z = 1 + t
    shadow.current.scale.x = 1.4 + (destinationY / 7) 
    shadow.current.position.x = THREE.MathUtils.lerp(group.current.position.x, (mouseState.mouse[0] / 2) * xMoveFactor, 0.05)

    group.current.rotation.x = group.current.rotation.z += 0.005
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, (mouseState.mouse[0] / 2) * xMoveFactor, 0.05)
  })

  return (
    <group {...props} dispose={null}>
      <group ref={group}>
        <mesh geometry={nodes.geo.geometry} castShadow receiveShadow>
          <MeshDistortMaterial color="#ffffff" flatShading roughness={1} metalness={0.5} factor={15} speed={5} />
        </mesh>
        <mesh geometry={nodes.geo.geometry}>
          <meshBasicMaterial wireframe />
        </mesh>
      </group>
      <Shadow ref={shadow} opacity={0.3} rotation-x={-Math.PI / 2} position={[0, -1.51, 0]} />
    </group>
  )
}

useGLTF.preload(filePath, true)
