import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types'

const colors = [
  '#0D68FC',
  '#CA4AFF',
  '#FF9600',
  '#1B998B',
  '#6235CC',
  '#FF5971',
  '#2A19EF',
  '#8D3782',
  '#F6692C'
]

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = ({
  x_values,
  datasets,
  padding,
  showLegend,
  legendPosition,
  displayYGrid,
  displayXGrid,
  titles
}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: displayYGrid
        }
      },
      x: {
        grid: {
          display: displayXGrid
        }
      }
    },
    plugins: {
      legend: {
        display: showLegend,
        position: legendPosition
      }
    },
    x: {
      type: 'time',
      display: true,
      time: {
        unit: 'day'
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    layout: {
      padding: padding
    }
  }

  const labels = x_values

  const data = {
    labels,
    datasets: datasets.map((data, index) => ({
      ...data,
      label: titles[index],
      backgroundColor: colors[index],
      borderColor: colors[index]
    }))
  }
  return <Line options={options} data={data} />
}

LineChart.propTypes = {
  x_values: PropTypes.array.isRequired,
  datasets: PropTypes.array.isRequired,
  padding: PropTypes.number,
  showLegend: PropTypes.bool,
  legendPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  displayYGrid: PropTypes.bool,
  displayXGrid: PropTypes.bool,
  titles: PropTypes.array
}

LineChart.defaultProps = {
  padding: 40,
  showLegend: true,
  legendPosition: 'top',
  displayYGrid: true,
  displayXGrid: true
}

export default LineChart
