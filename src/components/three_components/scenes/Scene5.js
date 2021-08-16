

import OxygenContainer2 from '../objects/OxygenContainer2'
import Box from '../objects/Box'
import AbstractSphere from '../objects/AbstractSphere'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera, Environment, useTexture, Reflector } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import React, { useState, useEffect, Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three'
import { MeshPhysicalMaterial } from 'three';

function MidsectionPlane() {
  const plane = useRef()

  const { viewport, aspect } = useThree()
  const texture = useTexture(window.location.href + '/images/majestic_deer_Benoît_FLEURY.png')
  const alpha = useTexture(window.location.href + '/images/AlphamapTest.gif')
  useMemo(() => (texture.minFilter = THREE.LinearFilter), [])

  const adaptedHeight = 3800 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  const adaptedWidth = 5000 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)

  return (
    <>
      <mesh ref={plane} position={[0, 4, -8]} scale={[adaptedWidth + 1, adaptedHeight + 0.5, 1]}>
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
        <meshBasicMaterial
          attach="material"
          map={texture}
          transparent={true}
        />
        {/* <meshBasicMaterial
          attach="material"
          map={texture}
          alphaMap={alpha}
          transparent={true}
        /> */}
      </mesh>

      {/* <mesh ref={plane} position={[0, 4, -4]} scale={[adaptedWidth + 2, adaptedHeight + 1.5, 2]}>
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
        <meshBasicMaterial attach="material" map={texture} alphaMap={alpha} transparent={true} />
      </mesh> */}
    </>
  )
}

function ReflectorPlane() {
  return (
    <Reflector
    position={[0, 0, -2]}
      rotation={[-Math.PI / 2, 0, 0]}
      args={[15, 15]}
      resolution={1024}
      mirror={0.001}
      mixBlur={1.0}
      mixBlur={0}
      mixStrength={1}
      depthScale={1}
      minDepthThreshold={0.9}
      maxDepthThreshold={1}
      depthToBlurRatioBias={0.25}
      distortion={0}
      opacity={.5}
      transparent={true}
      // distortionMap={distortionTexture}
      debug={0}
    >
      {(Material, props) => <Material color="#808F8D" metalness={1} normalScale={[1, 1]} {...props} />}
    </Reflector>
  )
}

export default function Scene() {
  return (
    <>
      <Stage adjustCamera={false} contactShadow={true} shadows={true} >
        <MidsectionPlane />
        <ReflectorPlane />
        <Suspense fallback={null}>
          <Environment preset={'forest'} background={false} />
        </Suspense>
      </Stage>
    </>
  );
}

