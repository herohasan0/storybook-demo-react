import React from 'react'

import BarChart from './BarChart'

export default {
  title: 'Charts/BarChart',
  component: BarChart,
  argTypes: { horizontal: { control: ' ' } }
}

const Template = (args) => (
  <div className="h-screen">
    <BarChart {...args} />
  </div>
)

export const Vertical = Template.bind({})

Vertical.args = {
  title: 'Vertical BarChart',
  x_axis: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  y_values: [15, 13, 14, 15, 13, 32, 10]
}

export const Horizontal = Template.bind({})

Horizontal.args = {
  title: 'Vertical BarChart',
  x_axis: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  y_values: [15, 13, 14, 15, 13, 32, 10],
  horizontal: true
}
