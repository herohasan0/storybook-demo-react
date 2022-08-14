import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js'
import PropTypes from 'prop-types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)
const BarChart = ({
  x_axis,
  y_values,
  title,
  horizontal,
  x_grid,
  y_grid,
  rounded,
  show_legend,
  show_y_labels,
  padding,
  colors,
  legendPosition
}) => {
  // Vertical bar chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'linear',
        display: show_y_labels,
        position: 'left',
        grid: {
          display: y_grid,
          drawBorder: false
        }
      },
      x: {
        grid: {
          display: x_grid
        }
      }
    },
    plugins: {
      legend: {
        display: show_legend,
        position: legendPosition
      }
    },
    layout: {
      padding: padding
    }
  }

  if (horizontal === true) {
    options['indexAxis'] = 'y' // if horizontal is true set index axis to y
    delete options['scales']['y']['type']
  }

  return (
    <Bar
      data={{
        labels: x_axis,
        datasets: [
          {
            label: title,
            data: y_values,
            backgroundColor: colors,
            yAxisID: 'y',
            borderRadius: rounded === true ? 50 : 0
          }
        ]
      }}
      options={options}
    />
  )
}

BarChart.propTypes = {
  /**
   * Chart title.
   */
  title: PropTypes.string,
  /**
   * Toggle grids for X axis
   */
  x_grid: PropTypes.bool,
  /**
   * Toggle grids for Y axis
   */
  y_grid: PropTypes.bool,
  rounded: PropTypes.bool,
  horizontal: PropTypes.bool,
  /**
   * Toggle legend title for the chart
   */
  show_legend: PropTypes.bool,
  legendPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  /**
   * Toggle Y axis labels
   */
  show_y_labels: PropTypes.bool,
  padding: PropTypes.number,
  x_axis: PropTypes.array.isRequired,
  y_values: PropTypes.array.isRequired,
  colors: PropTypes.array
}

BarChart.defaultProps = {
  x_grid: true,
  y_grid: true,
  rounded: false,
  horizontal: false,
  show_legend: true,
  legendPosition: 'top',
  show_y_labels: true,
  padding: 60,
  colors: [
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
}

export default BarChart
