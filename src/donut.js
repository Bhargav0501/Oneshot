import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [35, 20, 15, 10, 10, 5, 5],
      labels: ['CSE', 'ECE', 'EEE', 'IT', 'MECH', 'CIVIL', 'OTHERS']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state} series={this.state.series}  type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;