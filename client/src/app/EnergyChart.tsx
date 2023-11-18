"use client"
import Script from 'next/script';
import React from 'react'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line } from "react-chartjs-2";

const options = {
  scales: {
    y: {
      beginAtZero: true,
      border: {
        display: false,
        color: "gray",
        dash: [4, 16],
      },
      grid: {
        color: "gray",
        tickBorderDash: [4, 16],
        tickBorderDashOffset: 4,
      },
      ticks: {
        color: "white",
        padding: 10,
      },
    },
    x: {
      border: {
        display: false,
        color: "gray",
      },
      grid: {
        color: "transparent",
      },
      ticks: {
        color: "white",
        padding: 10,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

var defaultData = {
  labels: ["01", "05", "10", "15", "20", "25"],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 3,
      borderColor: "#18ad3b",
    },
  ],
};


function EnergyChart() {
return (
  <>
    <div className="card invert" style={{ height: "13rem" }}>
      <Line id="chart" data={defaultData} height={200} options={options} />
    </div>
  </>
);
}

export default EnergyChart