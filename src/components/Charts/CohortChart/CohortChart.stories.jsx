import React from 'react'

import CohortChart from './CohortChart'

export default {
  title: 'Charts/CohortChart',
  component: CohortChart
}

const Template = (args) => <CohortChart {...args} />

export const Primary = Template.bind({})

Primary.args = {
  data: [
    {
      name: '2022-07-31',
      data: [
        {
          x: 'Step 1',
          y: 0,
          retention_size: 2
        }
      ],
      cohort_size: 645
    },
    {
      name: '2022-07-24',
      data: [
        {
          x: 'Step 1',
          y: 0,
          retention_size: 7
        },
        {
          x: 'Step 2',
          y: 0,
          retention_size: 5
        }
      ],
      cohort_size: 1413
    },
    {
      name: '2022-07-17',
      data: [
        {
          x: 'Step 1',
          y: 0.05,
          retention_size: 11
        },
        {
          x: 'Step 2',
          y: 0.03,
          retention_size: 8
        },
        {
          x: 'Step 3',
          y: 0.01,
          retention_size: 3
        }
      ],
      cohort_size: 237
    },
    {
      name: '2022-07-10',
      data: [
        {
          x: 'Step 1',
          y: 0.06,
          retention_size: 6
        },
        {
          x: 'Step 2',
          y: 0.02,
          retention_size: 2
        },
        {
          x: 'Step 3',
          y: 0.03,
          retention_size: 3
        },
        {
          x: 'Step 4',
          y: 0,
          retention_size: 0
        }
      ],
      cohort_size: 98
    },
    {
      name: '2022-07-03',
      data: [
        {
          x: 'Step 1',
          y: 0.02,
          retention_size: 5
        },
        {
          x: 'Step 2',
          y: 0.03,
          retention_size: 7
        },
        {
          x: 'Step 3',
          y: 0.02,
          retention_size: 5
        },
        {
          x: 'Step 4',
          y: 0.01,
          retention_size: 3
        },
        {
          x: 'Step 5',
          y: 0.01,
          retention_size: 3
        }
      ],
      cohort_size: 220
    },
    {
      name: '2022-06-26',
      data: [
        {
          x: 'Step 1',
          y: 0.01,
          retention_size: 1
        },
        {
          x: 'Step 2',
          y: 0.03,
          retention_size: 3
        },
        {
          x: 'Step 3',
          y: 0.03,
          retention_size: 3
        },
        {
          x: 'Step 4',
          y: 0.02,
          retention_size: 2
        },
        {
          x: 'Step 5',
          y: 0.02,
          retention_size: 2
        },
        {
          x: 'Step 6',
          y: 0.01,
          retention_size: 1
        }
      ],
      cohort_size: 99
    },
    {
      name: '2022-06-12',
      data: [
        {
          x: 'Step 1',
          y: 0.01,
          retention_size: 1
        },
        {
          x: 'Step 2',
          y: 0.05,
          retention_size: 5
        },
        {
          x: 'Step 3',
          y: 0.02,
          retention_size: 2
        },
        {
          x: 'Step 4',
          y: 0.02,
          retention_size: 2
        },
        {
          x: 'Step 5',
          y: 0.03,
          retention_size: 3
        },
        {
          x: 'Step 6',
          y: 0.05,
          retention_size: 5
        },
        {
          x: 'Step 7',
          y: 0.03,
          retention_size: 3
        }
      ],
      cohort_size: 100
    }
  ],
  xaxis: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
}
