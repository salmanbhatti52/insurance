import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('barChart') barChart;
  bar: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.createBarChart();



  }

  createBarChart() {


    var myChart = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Motor", "Travel", "School Fees Gua", "Investment plans", "Home Insurance", "Goods In Transit", "Combined Fire & Burglary", "Marine Insurance", "MyMotoShield", "Gadget Protection Plan"],
        datasets: [{
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
          label: 'Series 1', // Name the s4eries
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], // Specify the data values array
          fill: true,
          borderColor: '#A8B400', // Add custom color border (Line)
          backgroundColor: 'rgba(176,181,0,65%)', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
        },
        ]
      },
      options: {
        plugins: {
          filler: {
            propagate: true
          },
          legend: {
            display: false
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 10,
              }
            }
          },

          y: {
            grid: {
              // display: false,
              color: 'rgba(217,143,7,0.1)',
            },
            ticks: {
              font: {
                size: 10,
              }
            }

          },
        },
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      }
    });
  }
}
