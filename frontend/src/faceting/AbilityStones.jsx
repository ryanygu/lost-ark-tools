import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';
import { abilityStoneRarity } from '../_helpers/'

import FacetingOptions from './FacetingOptions';
import FacetingLine from './FacetingLine';

function AbilityStones ({ match }) {
    const { path } = match;

    const [facetingData, setFacetingData] = useState({});

    useEffect(() => {
        // rare6, epic8, legendary9, relic10
        setFacetingData({
            options: {rarity: abilityStoneRarity.Legendary},
            rate: 75,
            line1: new Array(9).fill('?'),
            line2: new Array(9).fill('?'),
            line3: new Array(9).fill('?')
        })
    }, []);

    return (
        <div>
            <h1>Ability Stone Faceting</h1>
            <h3 className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Egestas fringilla phasellus faucibus scelerisque eleifend.</h3>

            <FacetingOptions data={facetingData} setFacetingData={setFacetingData} />
            <table className="table">
                <thead style={{ border: 'hidden' }}>
                    <tr>
                        <th></th>
                        {[...Array(9+1)].map((e, i) => <th key={i}></th>)}
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr><FacetingLine data={facetingData} lineType={'line1'} setFacetingData={setFacetingData} /></tr>
                    <tr><FacetingLine data={facetingData} lineType={'line2'} setFacetingData={setFacetingData} /></tr>
                    <tr><FacetingLine data={facetingData} lineType={'line3'} setFacetingData={setFacetingData} /></tr>
                </tbody>
            </table>
            <p><Link className="btn btn-primary" to={`${path}/statistics`}>Statistics</Link></p>

            <h3 className="mt-5"><span className="highlight">Coming soon:</span> ability stone calculator, choose what stone rarity (rare, epic, legendary, relic) to facet</h3>

        </div>
    );
}

export { AbilityStones };