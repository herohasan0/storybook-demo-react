import React from 'react'

import AnnotationScatterPlot from './AnnotationScatterPlot'

export default {
  title: 'Charts/AnnotationScatterPlot',
  component: AnnotationScatterPlot
}

const Template = (args) => <AnnotationScatterPlot {...args} />

export const Primary = Template.bind({})

Primary.args = {
  dataList: [
    {
      event_name: 'Event 1',
      x: 1.33,
      y: 22
    },
    {
      event_name: 'Event 2',
      x: 1.22,
      y: 20
    },
    {
      event_name: 'Event 3',
      x: 1.4,
      y: 15
    },
    {
      event_name: 'Event 4',
      x: 1.13,
      y: 11
    },
    {
      event_name: 'Event 5',
      x: 3.74,
      y: 28
    },
    {
      event_name: 'Event 6',
      x: 1.88,
      y: 27
    },
    {
      event_name: 'Event 7',
      x: 1.14,
      y: 32
    }
  ]
}
