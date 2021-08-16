import { OrbitControls, Loader, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';

import useStore from '../../store'

export default function ThreeCanvas() {
  const scenes = [
    Scene1,
    Scene2,
    Scene3,
    Scene4
  ]

  const sceneIndex = useStore(state => state.sceneIndex)

  return (
    <>
      <Canvas colorManagement={true} invalidateFrameloop pixelRatio={[1, 2]}>

        <Suspense fallback={null}>
          {React.createElement(scenes[sceneIndex])}
        </Suspense>

        {/* <Stats /> */}



      </Canvas>

      <Loader />
    </>
  );
}

