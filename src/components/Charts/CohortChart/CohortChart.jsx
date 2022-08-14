import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const CohortChart = ({
  data,
  xaxis,
  plotRadius,
  showXAixsLine,
  showYAxisLine,
  showToolbar,
  xAxisPosition,
  chartWidth,
  chartHeight
}) => {
  const chart_options = {
    chart: {
      id: 'cohort-map',
      toolbar: { show: showToolbar },
      margin: 100
    },
    xaxis: {
      categories: xaxis,
      position: xAxisPosition
    },
    plotOptions: {
      heatmap: {
        radius: plotRadius,
        distributed: true
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: showXAixsLine
        }
      },
      yaxis: {
        lines: {
          show: showYAxisLine
        }
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        border: '1px solid #000000',
        fontWeight: 'light',
        colors: ['#000f51']
      },

      formatter: function (val, opts) {
        return Math.round(val * 100).toString() + '%'
      }
    },
    colors: ['#0D68FC', '#86B4FE', '#6BA3FD', '#C2D9FE']
    // tooltip: {
    //   custom: ({ series, seriesIndex, dataPointIndex, w }) => {
    //     return renderToString(
    //       <div className="p-2 bg-navy text-white rounded-xl">
    //         <div>Cohort Size: {data[seriesIndex].cohort_size}</div>
    //
    //         <div>Retention: {data[seriesIndex].data[dataPointIndex].y}</div>
    //
    //         <div>
    //           Retention Size: {data[seriesIndex].data[dataPointIndex].retention_size}
    //         </div>
    //       </div>
    //     )
    //   }
    // }
  }
  return (
    <Chart
      options={chart_options}
      series={data}
      type="heatmap"
      width={chartWidth}
      height={chartHeight}
    />
  )
}

CohortChart.propTypes = {
  data: PropTypes.array.isRequired,
  xaxis: PropTypes.array.isRequired,
  showXAixsLine: PropTypes.bool,
  showYAxisLine: PropTypes.bool,
  showToolbar: PropTypes.bool,
  xAxisPosition: PropTypes.string,
  chartWidth: PropTypes.string,
  chartHeight: PropTypes.string,
  plotRadius: PropTypes.number
}

CohortChart.defaultProps = {
  showXAixsLine: false,
  showYAxisLine: false,
  showToolbar: true,
  xAxisPosition: 'top',
  chartWidth: '100%',
  chartHeight: '350px',
  plotRadius: 15
}

export default CohortChart
