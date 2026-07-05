import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const WeeklyReportChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sales",
        data: [15, 28, 28, 20, 38, 22, 30],
        borderColor: "#34C759",
        backgroundColor: "rgba(52, 199, 89, 0.12)",
        fill: true,
        tension: 0.4,
        pointRadius: [0, 0, 0, 5, 0, 0, 0],
        pointHoverRadius: 6,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#34C759",
        pointBorderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index"
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: "#B8E6B8",
        titleColor: "#111",
        bodyColor: "#111",
        displayColors: false,
        padding: 12,
        cornerRadius: 10,
        callbacks: {
          title: function (context) {
            return context[0].label;
          },
          label: function (context) {
            return `${context.raw}k`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          color: "#94A3B8",
          font: {
            size: 13
          }
        }
      },
      y: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
          color: "#94A3B8",
          callback: function (value) {
            return `${value}k`;
          }
        },
        grid: {
          color: "#F1F5F9",
          drawBorder: false
        },
        border: {
          display: false
        }
      }
    }
  };

  return (
    <div className="w-full h-80">
      <Line data={data} options={options} />
    </div>
  );
};

export default WeeklyReportChart;