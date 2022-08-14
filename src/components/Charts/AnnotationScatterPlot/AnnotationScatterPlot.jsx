import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const AnnotationScatterPlot = ({
  dataList,
  textColor,
  textBackground,
  markerSize,
  xAxisAverageText,
  yAxisAverageText,
  yAxisGridAmount,
  chartWidth,
  chartHeight,
  xAxisAverageColor,
  yAxisAverageColor,
  xAxisAverageTextColor,
  yAxisAverageTextColor
}) => {
  let seriesData = []
  let totalX = 0
  let totalY = 0
  let pointList = []

  for (let item of dataList) {
    seriesData.push([item.x, item.y])
    totalX += item.x
    totalY += item.y
    pointList.push({
      y: item.y,
      x: item.x,
      label: {
        offsetY: 0,
        style: {
          color: textColor,
          background: textBackground
        },
        text: item.event_name
      },
      marker: {
        size: markerSize
      }
    })
  }

  const chartSettings = {
    series: [
      {
        name: 'Engagement Matrix',
        data: seriesData
      }
    ],
    options: {
      annotations: {
        points: pointList,
        xaxis: [
          {
            x: totalX / pointList.length,
            strokeDashArray: 0,
            borderColor: xAxisAverageColor,
            label: {
              borderColor: xAxisAverageColor,
              style: {
                color: xAxisAverageTextColor,
                background: xAxisAverageColor
              },
              text: xAxisAverageText
            }
          }
        ],
        yaxis: [
          {
            y: totalY / pointList.length,
            strokeDashArray: 0,
            borderColor: yAxisAverageColor,
            label: {
              borderColor: yAxisAverageColor,
              style: {
                color: yAxisAverageTextColor,
                background: yAxisAverageColor
              },
              text: yAxisAverageText
            }
          }
        ]
      },
      chart: {
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      xaxis: {
        tickAmount: 'dataPoints',
        floating: false,
        labels: {
          show: true
        },
        type: 'numeric',
        axisTicks: {
          show: true
        },
        title: 'asdfsadf'
      },
      yaxis: {
        tickAmount: yAxisGridAmount
      }
    }
  }

  return (
    <ApexChart
      options={chartSettings.options}
      series={chartSettings.series}
      width={chartWidth}
      height={chartHeight}
      type={'scatter'}
    />
  )
}

AnnotationScatterPlot.propTypes = {
  dataList: PropTypes.array.isRequired,
  textColor: PropTypes.string,
  textBackground: PropTypes.string,
  markerSize: PropTypes.number,
  xAxisAverageText: PropTypes.string,
  yAxisAverageText: PropTypes.string,
  yAxisGridAmount: PropTypes.number,
  chartWidth: PropTypes.string,
  chartHeight: PropTypes.string,
  xAxisAverageColor: PropTypes.string,
  yAxisAverageColor: PropTypes.string,
  xAxisAverageTextColor: PropTypes.string,
  yAxisAverageTextColor: PropTypes.string
}

AnnotationScatterPlot.defaultProps = {
  textColor: 'blue',
  textBackground: 'transparent',
  markerSize: 0,
  xAxisAverageText: 'Average of X Axis',
  yAxisAverageText: 'Average of Y Axis',
  yAxisGridAmount: 7,
  chartWidth: '100%',
  chartHeight: '300px',
  xAxisAverageColor: 'blue',
  yAxisAverageColor: 'blue',
  xAxisAverageTextColor: 'white',
  yAxisAverageTextColor: 'white'
}

export default AnnotationScatterPlot
