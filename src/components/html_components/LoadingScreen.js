import { useSpring, animated } from "@react-spring/web"

export default function LoadingScreen(props) {
  const { skillValue } = useSpring({
    config: { duration: 3000 },
    to: { skillValue: 1000 }, from: { skillValue: 0 },
    delay: 2000
  })

  props = useSpring({
    config: { duration: 1450 },
    to: { opacity: 1 }, from: { opacity: 0 },
    delay: 2000
  })

  return (
    <div styles="position: absolute">
      <animated.span className="open-sans tera ls-xlarge bold">
        {skillValue.to(val => val.toFixed(2))}
      </animated.span>
      <br></br>
      <animated.div style={props}>I will fade in</animated.div>
      <animated.div>{skillValue.to(val => val.toFixed(2))}</animated.div>
    </div>
  )
}