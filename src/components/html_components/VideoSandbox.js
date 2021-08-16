import useStore from '../../store'
import ReactPlayer from 'react-player'
import {useEffect} from 'react'

export default function Navigation() {
  const videoIndex = useStore(state => state.videoIndex)
  const videoPaths = useStore(state => state.videoPaths)

  return (
    <>
      <video autoPlay muted loop id="myVideo" key={videoPaths[videoIndex]}>
        <source src={videoPaths[videoIndex]} type="video/mp4" />
      </video>

      {/* <div class="content">
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
        <button id="myBtn" onClick="myFunction()">Pause</button>
      </div> */}
    </>
  )
}