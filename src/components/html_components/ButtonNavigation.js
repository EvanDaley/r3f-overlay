import useStore from '../../store'

export default function Navigation() {
  const selectScene0 = useStore(state => state.selectScene0)
  const selectScene1 = useStore(state => state.selectScene1)
  const selectScene2 = useStore(state => state.selectScene2)
  const selectScene3 = useStore(state => state.selectScene3)

  return (
    <>
      <div className='button-overlay'>
        <div className='flex-container' style={{justifyContent: "space-around"}}>
          <button className="btn" onClick={selectScene0}>sandbox 1</button>
          <button className="btn" onClick={selectScene1}>sandbox 2</button>
          <button className="btn" onClick={selectScene2}>sandbox 3</button>
          <button className="btn" onClick={selectScene3}>sandbox 4</button>
        </div>
      </div>
    </>
  )
}