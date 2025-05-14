import { RADAR_STYLES } from "../settings";
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement
);

export default class ChartService {
  createBarChart(element, title, label, labels, data) {
    return new Chart(element, {
      type: "bar",
      data: {
        labels,
        datasets: [{ label, data, ...RADAR_STYLES }],
      },
      options: {
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: title,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 1,
          },
        },
      },
    });
  }

  createRadarChart(element, title, label, labels, data) {
      return new Chart(element, {
        type: "radar",
        data: {
          labels,
          datasets: [{ label, data, ...RADAR_STYLES }],
        },
        options: {
          responsive: false,
          plugins: {
            title: {
              display: true,
              text: title,
            },
          },
        },
      });
    }


}