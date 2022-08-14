import React from 'react'

import AreaChart from './AreaChart'

export default {
  title: 'Charts/AreaChart',
  component: AreaChart
}

const Template = (args) => <AreaChart {...args} />

export const Primary = Template.bind({})

Primary.args = {
  chartData: {
    series: [
      {
        name: 'demo_counts',
        data: [
          20094, 21161, 23109, 20188, 22240, 20294, 21361, 23109, 21188, 22440, 20831,
          21030
        ]
      }
    ],
    xaxis: [
      '2022-08-01',
      '2022-08-02',
      '2022-08-03',
      '2022-08-04',
      '2022-08-05',
      '2022-08-06',
      '2022-08-07',
      '2022-08-08',
      '2022-08-09',
      '2022-08-10',
      '2022-08-11',
      '2022-08-12'
    ]
  }
}
