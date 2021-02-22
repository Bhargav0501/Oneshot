import React, { Component } from "react";
import Chart from "react-apexcharts";

class Barchart extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        options: {
          chart: {
            id: 'college-data'
          },
          xaxis: {
            categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
          }
        },
        series: [{
          name: 'Students Joined',
          data: [350, 450, 320, 500, 600, 650, 600, 700]
        }]
      }
    }
    render() {
      return (
        <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
      )
    }
  }
export default Barchart;