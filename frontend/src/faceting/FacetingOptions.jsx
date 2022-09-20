import React from 'react'
import { abilityStoneRarity } from '../_helpers'

import { facetingService, accountService, alertService } from '@/_services'
import { count } from '../../../backend/faceting/abilityStone.model'

const FacetingOptions = ({ data, setFacetingData }) => {
  // TODO: rare6, epic8, legendary9, relic10

  const handleFacetingReset = () => {
    setFacetingData({
      options: {rarity: abilityStoneRarity.Legendary},
      rate: 75,
      line1: new Array(9).fill('?'),
      line2: new Array(9).fill('?'),
      line3: new Array(9).fill('?')
    })
  }

  const countScore = (data) => {
    const line1 = data.line1
    const line2 = data.line2
    const line3 = data.line3
    let count = 0
    for (let i = 0; i < line1.length; i++) {
      if (line1[i] === '+1') {
        count += 1
      }
      if (line2[i] === '+1') {
        count += 1
      }
      if (line3[i] === 'x') {
        count -= 1
      }
    }
    return count
  }

  const handleFacetingSave = () => {
    if (data.line1.indexOf('?') === -1 && data.line2.indexOf('?') === -1 && data.line3.indexOf('?') === -1) {
      // TODO: send to backend
      const userId = accountService.userValue.id;
      const score = countScore(data)
      facetingService.saveFaceting(userId, { score: score, ...data })
        .then(() => {
          alertService.success('Saved faceting data successfully.', { keepAfterRouteChange: true });
          handleFacetingReset();
        })
        .catch(error => {
          alertService.error(error);
          console.log(error)
        });
      return null
    }
    alertService.error('Cannot save: not all nodes are filled yet.');
  }

  return (
    <div className="mt-4">
      {/*<div>
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Stone Rarity (coming soon)
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="dropdown-item">Rare</li>
          <li className="dropdown-item">Epic</li>
          <li className="dropdown-item">Legendary</li>
          <li className="dropdown-item">Relic</li>
        </ul>
      </div>*/}
      <button onClick={() => handleFacetingReset()} className="btn btn-danger">Reset</button>
      <button onClick={() => handleFacetingSave()} className="btn btn-primary mr-1" style={{ "marginLeft": "10px" }}>Save</button>
    </div>
  )
}

export default FacetingOptions