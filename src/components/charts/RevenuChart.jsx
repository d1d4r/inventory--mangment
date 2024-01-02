import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fetchRevenue = async () => {
  const { data } = await axios.get(
    "http://localhost:3001/salesOrdeItems/monthly-revenue"
  );
  return data;
};
const RevenuChart = () => {
  const {
    data: datas,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["month-revenue"],
    queryFn: fetchRevenue,
  });

  const x = datas?.map((data) => {
    return {
      labels: data.MONTH,
      data: data.MonthlyRevenue,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    };
  });

  return (
    <Line
      style={{ backgroundColor: "whitesmoke" }}
      datasetIdKey="id"
      data={{
        labels: x?.map((x) => x.labels),
        datasets: [
          {
            id: 1,
            label: "2023",
            data: x?.map((x) => x.data),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      }}
    />
  );
};

export default RevenuChart;
