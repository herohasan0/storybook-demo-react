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
        name: 'view_count',
        data: [
          21094, 23161, 25109, 21188, 23240, 21294, 23361, 24109, 23188, 23440, 21831,
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
