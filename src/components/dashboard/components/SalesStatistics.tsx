import React from "react";
import moment from "moment";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

import "./style.css";

Chart.register(...registerables);

const options = {
    plugins: {
        title: {
            display: true,
            text: "Sales amount in last 7 days",
        },
        legend: {
            display: false,
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false,
            },
        },
        y: {
            ticks: {
                display: false,
                beginAtZero: true,
            },
            stacked: true,
            grid: {
                drawBorder: false,
                display: false,
            },
            border: {
                display: false,
            },
        },
    },
    maintainAspectRatio: false,
};

const SalesStatistics = () => {
    let last7Days = [];
    let currentDate = moment();
    for (let i = 0; i < 7; i++) {
        // Subtract 'i' days from the current date
        let date = currentDate.clone().subtract(i, "days");

        // Format the date in MM/dd format and push it to the array
        last7Days.push(date.format("MM-DD"));
    }
    const labels = last7Days.reverse();

    const data = {
        labels,
        datasets: [
            {
                label: "Sales amount ($)",
                data: [12, 15, 3, 5, 2, 10, 7],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    };
    return (
        <div className="w-full h-full">
            <Line
                options={options}
                data={data}
                style={{
                    padding: "20px",
                }}
            />
        </div>
    );
};

export default SalesStatistics;
