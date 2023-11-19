"use client"
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
import Card from "@/components/Card";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  resizeDelay: 0,

  scales: {
    y: {
      //beginAtZero: true,
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
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [12, 19, 15, 16, 20, 13, 17],
      borderWidth: 3,
      borderColor: "#037244",
    },
  ],
};


function EnergyChart() {
  return (
    <>
      <Card invert={true} style={{ height: "12rem", animation: "none", opacity: 1, transform: "initial" }}>
        <Line id="chart" data={defaultData} options={options} />
      </Card>
    </>
  );
}

export default EnergyChart