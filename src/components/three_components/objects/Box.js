import { useSpring, animated } from "@react-spring/three"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export default function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // const [active, setActive] = useState(false)

  // useSpring will gracefully interpolate between different states.
  const { scale, color } = useSpring({
    config: { duration: 450 },
    scale: hovered ? [.45,.45,.45] : [.4, .4, .4],
    color: hovered ? 'green' : 'black'
  })

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    // if (meshRef.current != null) {
      // meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    // }
  })

  return (
    <animated.mesh
      {...props}
      ref={meshRef}
      scale={scale}
      // onClick={(event) => setActive(!active)}
      onPointerOver={(event) => {
        setHover(true)
        console.log(meshRef.current.position)
      }}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <animated.meshStandardMaterial color={color} />
    </animated.mesh>
  )
}