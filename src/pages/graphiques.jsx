
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrement des composants nécessaires pour Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Graphique = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // Faire une requête à l'API
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((response) => {
        const data = response.data;
        const labels = data[0]?.sparkline_in_7d?.price.map((_price, index) => index); // Utilisation des index comme labels
        const datasets = data.map((coin) => ({
          label: coin.name,
          data: coin.sparkline_in_7d.price, // Utilisation des prix des 7 derniers jours
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          tension: 0.1,
        }));

        setChartData({
          labels,
          datasets,
        });
      })
      .catch((error) => {
        console.error("Error fetching the crypto data", error);
      });
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Cryptocurrency Price Evolution (7 Days)</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Graphique;
