import dynamic from 'next/dynamic'
import moment from 'moment'
import PropTypes from 'prop-types'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const AreaChart = ({
  chartData,
  date_x_axis,
  legend_position,
  height,
  show_x,
  show_y,
  yaxis_title,
  show_grid,
  colors,
  show_legend
}) => {
  const chartOptions = {
    series: chartData.series,
    options: {
      chart: {
        type: 'area'
      },
      stroke: {
        curve: 'straight'
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        enabled: false,
        type: date_x_axis === true ? 'datetime' : 'category',
        categories: chartData.xaxis,
        labels: {
          show: show_x,
          formatter: function (value, timestamp, opts) {
            return date_x_axis === true ? moment(new Date(value)).format('MMM D') : value
          }
        }
      },
      yaxis: {
        decimalsInFloat: 2,
        labels: {
          show: show_y
        },
        title: {
          text: yaxis_title
        }
      },
      grid: { show: show_grid },
      legend: {
        show: show_legend,
        position: legend_position
      },
      colors: colors
    }
  }
  if (chartData.annotations) {
    chartOptions.options['annotations'] = chartData.annotations
  }

  return (
    <ApexChart
      options={chartOptions.options}
      series={chartOptions.series}
      type={'area'}
      width="100%"
      height={height}
    />
  )
}

AreaChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  date_x_axis: PropTypes.bool,
  legend_position: PropTypes.string,
  height: PropTypes.string,
  show_x: PropTypes.bool,
  show_y: PropTypes.bool,
  yaxis_title: PropTypes.string,
  show_grid: PropTypes.bool,
  colors: PropTypes.array,
  show_legend: PropTypes.bool
}

AreaChart.defaultProps = {
  date_x_axis: true,
  legend_position: 'bottom',
  height: '300px',
  show_x: true,
  show_y: true,
  show_grid: true,
  colors: ['#FF5971', '#CA4AFF', '#0D68FC', '#F6692C'],
  show_legend: false
}

export default AreaChart
