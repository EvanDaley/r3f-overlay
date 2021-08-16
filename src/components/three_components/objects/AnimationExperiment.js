/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, Suspense } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const filePath = window.location.href + '/models/AnimationExperiment.glb'

function TheModel() {
  let mixer = null;
  const { scene, animations } =  useGLTF(filePath)
  mixer = new THREE.AnimationMixer(scene);

  console.log(animations)

  void mixer.clipAction(animations[0]).play();

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={scene} position={[0, 0, 0]} />;
}

export default function Model(props) {
  const group = useRef()

  return (
    <group ref={group} {...props} dispose={null}>
      <Suspense fallback={null}>
        <TheModel />
      </Suspense>
    </group>
  )
}

useGLTF.preload(filePath)