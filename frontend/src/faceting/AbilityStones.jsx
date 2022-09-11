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
            <FacetingOptions data={facetingData} setFacetingData={setFacetingData} />
            <table className="table">
                <thead style={{ border: 'hidden' }}>
                    <tr>
                        <th style={{ width: '10%' }}></th>
                        {[...Array(9+1)].map((e, i) => <th style={{ width: '5%' }} key={i}></th>)}
                        <th style={{ width: '30%' }}></th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr><FacetingLine data={facetingData} lineType={'line1'} setFacetingData={setFacetingData} /></tr>
                    <tr><FacetingLine data={facetingData} lineType={'line2'} setFacetingData={setFacetingData} /></tr>
                    <tr><FacetingLine data={facetingData} lineType={'line3'} setFacetingData={setFacetingData} /></tr>
                </tbody>
            </table>
            <p><Link className="btn btn-primary" to={`${path}/statistics`}>Statistics</Link></p>
        </div>
    );
}

export { AbilityStones };