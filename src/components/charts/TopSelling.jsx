import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const fetchTopSelling = async () => {
  const { data } = await axios.get(
    "http://localhost:3001/products/top-selling-products"
  );
  return data;
};
const TopSelling = () => {
  const {
    data: topSelling,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["top-selling"],
    queryFn: fetchTopSelling,
  });

  const labels = topSelling?.map((item) => item.ProductName);
  const quantities = topSelling?.map((item) => parseInt(item.TotalQuaintity));
  const revenues = topSelling?.map((item) => parseFloat(item.TotalRevenue));

  return (
    <Pie
      data={{
        labels: topSelling?.map(
          (_, i) => `name : ${labels[i]}, revenues : ${revenues[i]}`
        ),
        datasets: [
          {
            label: "quantity saled",
            data: quantities,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};

export default TopSelling;
