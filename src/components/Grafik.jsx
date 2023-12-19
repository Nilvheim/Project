import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./Grafik.css"

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 43],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Hadir', 'Terlambat', 'Izin', 'Alpa'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              horizontalAlign: 'right',
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={600} />
    </div>
  );
};

export default ApexChart;
