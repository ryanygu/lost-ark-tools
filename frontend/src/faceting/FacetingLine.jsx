import React from "react"

import FacetingNode from "./FacetingNode"

const FacetingLine = ({ data, lineType, setFacetingData }) => {
  let label, nodes, line
  if (lineType === 'line1') {
    nodes = data.line1
    label = 'Success rate:'
    line = 'Line 1'
  } else if (lineType === 'line2') {
    nodes = data.line2
    label = 'Success rate:'
    line = 'Line 2'
  } else {
    nodes = data.line3
    label = 'Chance of cracking:'
    line = 'Line 3'
  }

  const handleEngravingClick = (data, nodes, lineType) => {
    if (nodes.indexOf('?') === -1) {
      window.alert('line disabled: all nodes completed')
      return
    }

    const roll = Math.floor(Math.random() * 101) // 0-100
    let line1 = data.line1
    let line2 = data.line2
    let line3 = data.line3
    if (roll < data.rate) {
      // dispatch(engravingPass(data, lineType))
      if (lineType === 'line1') {
        const i = line1.indexOf('?')
        line1[i] = '+1'
      } else if (lineType === 'line2') {
        const i = line2.indexOf('?')
        line2[i] = '+1'
      } else {
        const i = line3.indexOf('?')
        line3[i] = '+1'
      }
      const rateChange = data.rate === 25 ? 0 : 10
      const updatedData = {
        ...data,
        rate: data.rate - rateChange,
        line1: line1,
        line2: line2,
        line3: line3
      }
      setFacetingData(updatedData)
    } else {
      // dispatch(engravingFail(data, lineType))
      if (lineType === 'line1') {
        const i = line1.indexOf('?')
        line1[i] = 'x'
      } else if (lineType === 'line2') {
        const i = line2.indexOf('?')
        line2[i] = 'x'
      } else {
        const i = line3.indexOf('?')
        line3[i] = 'x'
      }
      const rateChange = data.rate === 75 ? 0 : 10
      const updatedData = {
        ...data,
        rate: data.rate + rateChange,
        line1: line1,
        line2: line2,
        line3: line3
      }
      setFacetingData(updatedData)
    }
  }

  return (
    <>
      <td>{line}</td>
      {nodes ? Array.from({ length: 9 }, (x, i) => {
        return <FacetingNode key={i} text={nodes[i]} />
      }) : null}
      <td style={{ whiteSpace: 'nowrap' }}>
        {label} {data.rate}%
      </td>
      <td style={{ whiteSpace: 'nowrap' }}>
        <button className="btn btn-sm btn-primary mr-1" value={lineType} onClick={() => handleEngravingClick(data, nodes, lineType)}>go</button>
      </td>
    </>
  )
}

export default FacetingLine