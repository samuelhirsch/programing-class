import React, { useState } from 'react'

export default function FontComponent(props) {
    const[selectedValue,setSelectedValue]=useState("")
    function setValue(e){
       setSelectedValue(e.target.value)
    }

    return (
        <>
            <select  id="" value={selectedValue} onChange={(e)=>{setValue(e);props.handleChangeFont(e)}}>
                <option  value="" hidden>Choose a font</option>
                <option value="georgia">Georgia</option>
                <option value="monospace">monospace</option>
                <option value="cursive">cursive</option>
                <option value="system-ui">default</option>
            </select>
        </>
    )
}
