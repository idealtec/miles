import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import Chart from 'chart.js';

import './barchart.html';

Template.barchart.onRendered(function () {
    var ctx = document.getElementById("myChart");
    this.autorun(() => {
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Session.get('labels'),
                datasets: [{
                    label: '# of Miles',
                    data: Session.get('milesData'),
                    fill:true,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)'
                    ],
                    borderWidth: 1
                }, {
                    label: '# of Gallons',
                    data: Session.get('gallonsData'),
                    fill:true,
                    backgroundColor: [

                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],

                    borderWidth: 1
                },
            {
                    label: 'Price',
                    data: Session.get('priceData'),
                    fill:true,
                    backgroundColor: [

                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],

                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Fillup'
                        }
                    }],
                    yAxes: [{
                        stacked: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        });
    });
});