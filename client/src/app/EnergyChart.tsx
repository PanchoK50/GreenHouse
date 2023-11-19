"use client";
import React from "react";
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
      title: {
        display: true,
        text: "kWh", // Set the y-axis label to kWh
        color: "white", // You can customize the color
      },
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

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    borderWidth: number;
    borderColor: string;
  }[];
}


function EnergyChart({ data }: { data: ChartData }) {
  return (
    <>
      <Card invert={true} style={{ height: "15rem" }}>
        <Line id="chart" data={data} options={options} />
      </Card>
    </>
  );
}

export default EnergyChart;
