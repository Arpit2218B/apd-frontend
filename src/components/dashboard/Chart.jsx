import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Created', 'Completed', 'Expired', 'Pending'],
  datasets: [
    {
      data: [120, 7, 0, 5],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
    plugins: {
        legend: {
          display: false
        }
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} height={120} />
  </>
);

export default LineChart;