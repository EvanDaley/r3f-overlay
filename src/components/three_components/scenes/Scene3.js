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
    'studio',
    'sunset',
    'dawn',
    'night',
    'warehouse',
    'forest',
    'apartment',
    'city',
    'park',
    'lobby',
  ]

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 4, 13]} />
      <OrbitControls target={[1, 1, 0]} />

      <Stage adjustCamera={false} intensity={.5} contactShadow={true} shadows={true}>
        <OxygenContainer position={[-6, 0, 0]} rotation={[0, 90, 0]} />
        <AbstractSphere animationOffset={[-6, 2, 0]} color="black" />
        <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[-6, 2, 0]} color="black" />
      </Stage>
    </>
  );
}

