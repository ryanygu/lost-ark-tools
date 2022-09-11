import React from 'react'
import { Circle, CircleFill } from 'react-bootstrap-icons';


const FacetingNode = ({ text }) => {
  if (text === '?') {
    return (
      <td>
        <Circle color="black" size={12}/>
      </td>
    )
  }

  return (
    <td>
      {text === '+1' ? <CircleFill color="green" size={12}/> : <CircleFill color="red" size={12}/>}
    </td>
  )
}

export default FacetingNode