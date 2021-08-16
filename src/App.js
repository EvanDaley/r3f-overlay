import './App.css';
import ThreeCanvas from './components/three_components/ThreeCanvas'
import HTMLContent from './components/html_components/HTMLContent'
import React, { useState, useEffect } from 'react';
import mouseState from './mouseState';
import useStore from './store.js'

function App() {
  const onDocumentPointerMove = (e) => {
    mouseState.mouse = [(e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1]
  }

  const switchVideos = useStore(state => state.switchVideos)
  const videoIndex = useStore(state => state.videoIndex)
  const videoPaths = useStore(state => state.videoPaths)

  const onDocumentClick = (e) => {
    switchVideos()
    console.log(videoIndex)
    console.log(videoPaths)
  }

  onDocumentClick.bind(this)

  useEffect(() => {
    console.log("HERE")
    document.addEventListener('click', onDocumentClick, false);
    document.addEventListener('mousemove', onDocumentPointerMove, false);
  }, []);

  return (
    <>
      <HTMLContent/>
      <ThreeCanvas/>
    </>
  );
}

export default App;
