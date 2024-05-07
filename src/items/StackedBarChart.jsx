import React from 'react';
/**  Returns Chart
 * 
 * 
 * 
 */
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const StackedBarChart = () => {
    const options = {
        plugins: {
            title: {
                display: false,
                text: 'Chart.js Bar Chart - Stacked',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                ticks: {
                    color: '#FFFFFF',
                    beginAtZero: true,
                    stepSize: 100,
                    max: 500,
                    callback: function (value, index, values) {
                        return value.toLocaleString() + 'K';
                    },
                },

                grid: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: true,
                    color: '#1f1f21'
                },
            },
        },
    };

    const labels = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU', 'MO', 'TU', 'WE', 'TH', 'FR']

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [50, 70, 100, 120, 180, 40, 0, 0],
                backgroundColor: '#C704FE',
            },
            {
                label: 'Dataset 2',
                data: [0, 0, 0, 30, 20, 200, 400, 500],
                backgroundColor: '#D1FD0A',
            },
        ],
    };
    return <Bar
        height={80} data={data} options={options} />
};

export default StackedBarChart;
