import React, { useState } from 'react'
import FontComponent from './FontComponent'
import DivComponent from './divComponent'

export default function App() {
  const [Colors, setColors] = useState({ color: "#000000", backgroundColor: "#FFFFFF" })
  const [font, setFont] = useState("system-ui");
  const { color, backgroundColor } = Colors;
  function handleChangeFont(e) {
    setFont(e.target.value)
  }

  const style = { ...Colors, fontFamily:font }
  return (
    <>
      <div id='input-div'>
        <label>
          <span>color: </span><input type="color" value={color} onChange={(e) => { setColors({ ...Colors, color: e.target.value }) }} />
        </label>
        <label>
          <span> BackGround:</span> <input type="color" value={backgroundColor} onChange={(e) => { setColors({ ...Colors, backgroundColor: e.target.value }) }} />
        </label>
      </div>
      <FontComponent handleChangeFont={handleChangeFont} />
      <DivComponent style={style} />
    </>
  )
}
