// HTMLContent.js
// Throw all the raw HTML content here. This is all rendered outside the context of the canvas,
// so don't try to do anything fancy with Three.js.

import Menu from './Menu'
import ButtonNavigation from './ButtonNavigation'
import VideoSandbox from './VideoSandbox'
import useStore from '../../store'

export default function HTMLContent() {
  return (
    <>
      {/*<div className="html-content-container">*/}
      {/* <Menu /> */}
      {/* <ButtonNavigation/> */}
      <VideoSandbox />
      {/*</div>*/}
    </>
  )
}