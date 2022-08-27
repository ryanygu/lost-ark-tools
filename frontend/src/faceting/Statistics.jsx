import React, { useState, useEffect } from 'react';
import { accountService } from '@/_services';
import { utils } from '../_helpers';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { facetingService } from '../_services/faceting.service';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



function Statistics ({ match }) {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const user = accountService.userValue;
        facetingService.getFacetingHistory(user.id)
            .then(res => {
                const sortedData = utils.sortByCreatedDate(res)
                setScores(sortedData.map(x => x.score))
            });
    }, []);

    const min = Math.min(...scores)
    const max = Math.max(...scores)
    const sum = scores.reduce((a, b) => a + b, 0)
    const avg = (sum / scores.length).toFixed(2) || 0

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Performance records',
            },
        },
    }
    const labels = Array.from({ length: scores.length }, (_, i) => i+1)
    const data = {
        labels,
        datasets: [
            {
                label: 'My scores',
                data: labels.map(i => scores[i-1]),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    }

    return (
        <div>
            <h1>Statistics</h1>
            <p>Attempts: {scores.length}</p>
            <p>Min: {min}</p>
            <p>Max: {max}</p>
            <p>Average: {avg}</p>
            <div><Line options={options} data={data} /></div>
        </div>
    );
}

export { Statistics };