import React from 'react'

import LineChart from './LineChart'

export default {
  title: 'Charts/LineChart',
  component: LineChart
}

const Template = (args) => (
  <div className="h-screen">
    <LineChart {...args} />
  </div>
)

export const SingleData = Template.bind({})

SingleData.args = {
  titles: ['data 1'],
  x_values: [2012, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
  datasets: [
    {
      data: [10890, 11406, 12593, 10502, 18240, 11204, 12877, 21166, 10170, 11000]
    }
  ]
}

export const MultiData = Template.bind({})

MultiData.args = {
  titles: ['data 1', 'data 2'],
  x_values: [2012, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
  datasets: [
    {
      data: [11890, 12406, 13593, 14502, 15240, 18204, 18877, 23166, 19170, 19000]
    },
    {
      data: [10890, 11406, 12593, 10502, 18240, 11204, 12877, 21166, 10170, 11000]
    }
  ]
}
