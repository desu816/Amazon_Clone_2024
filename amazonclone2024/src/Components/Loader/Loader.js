import React from 'react'
// import { BsJustify } from 'react-icons/bs'
import {FadeLoader} from 'react-spinners'

function Loader () {
  return (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            heigh: "50vh",
        }}
        >
      <FadeLoader color="#36d7b7" />
    </div>
  )
}

export default Loader