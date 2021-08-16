import LinesRobot from '../objects/LinesRobot'
import OxygenContainer from '../objects/OxygenContainer'
import OxygenContainer2 from '../objects/OxygenContainer2'
import OxygenContainer3 from '../objects/OxygenContainer3'
import AbstractSphere from '../objects/AbstractSphere'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect, Suspense } from 'react';

export default function Scene({ sceneIndex }) {
  const environmentOptions = [
    'park',
    'sunset',
    'dawn',
    'night',
    'warehouse',
    'forest',
    'apartment',
    'studio',
    'city',
    'lobby',
  ]

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 4, 13]} />
      <OrbitControls target={[1, 1, 0]} />

      <Stage adjustCamera={false} intensity={.5} contactShadow={true} shadows={true}>
        <OxygenContainer3 rotation={[0, 90, 0]} position={[12, 0, 0]} />
        <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[6, 2, 0]} color="red" />
      </Stage>
    </>
  );
}

