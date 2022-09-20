import React, { useState, useEffect } from 'react';
import { accountService } from '@/_services';
import { utils, history } from '../_helpers';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

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



function Statistics ({ match, history }) {
    const [scores, setScores] = useState([]);
    const [facetingHistory, setFacetingHistory] = useState([]);

    useEffect(() => {
        const user = accountService.userValue;
        facetingService.getFacetingHistory(user.id)
            .then(res => {
                const sortedData = utils.sortByCreatedDate(res)
                setScores(sortedData.map(x => x.score))
                setFacetingHistory(sortedData)
            });
    }, []);

    const min = Math.min(...scores)
    const max = Math.max(...scores)
    const sum = scores.reduce((a, b) => a + b, 0)
    const avg = (sum / scores.length).toFixed(2) || 0

    const mockData = {
            lowestScore: 2,
            highestScore: 20,
            averageScore: 7,
    }

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
            <button type="button" onClick={() => history.goBack()} className="btn btn-outline-primary remove-btn-outline"><ArrowLeft/> Back</button>
            <h1>Statistics</h1>
            <h3 className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Egestas fringilla phasellus faucibus scelerisque eleifend.</h3>

            <h3 className="mt-3"><span className="highlight">Coming soon:</span> compare by username search, display chart visualization by category (i.e. only Relic stones, or only show statistics for the past X days)</h3>


            <table class="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Number of attempts</th>
                        <th scope="col">Average score</th>
                        <th scope="col">Lowest score</th>
                        <th scope="col">Highest score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* TODO: add actual data */}
                        <th scope="row">LOATools Data</th>
                        <td>N/A</td>
                        <td>{mockData.averageScore}</td>
                        <td>{mockData.lowestScore}</td>
                        <td>{mockData.highestScore}</td>
                    </tr>
                    <tr>
                        <th scope="row">You</th>
                        <td>{scores.length}</td>
                        <td>{avg}</td>
                        <td>{min}</td>
                        <td>{max}</td>
                    </tr>
                </tbody>
            </table>

            <div className="col-9 mt-5 mx-auto">
                <Line options={options} data={data} />
            </div>
        </div>
    );
}

export { Statistics };