import React from 'react';
import styles from './style.scss';
import {HorizontalBar} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class BarChart extends React.Component {

    render() {

    const options = {
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Rubik'",
            scales: {
            xAxes: [{
                gridLines: {
                    display: false
                    },
                stacked: true,
                ticks: {
                        max: this.props.length,
                        stepSize: (this.props.length / 2),
                        fontColor: '#424242'
                    },
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                stacked: true,
                ticks: {
                        fontSize: 14.5,
                        fontColor: '#424242'
                },
            }]
        }
    }

        let data = {
        type: 'line',
        labels: this.props.labels,
        datasets: [{

                    label: "😍",
                    backgroundColor: '#e53935',
                    borderColor: '#e53935',
                    data: this.props.rateThree,
                }, {

                    label: "😊",
                    backgroundColor: '#ffeb3b',
                    borderColor: '#ffeb3b',
                    data: this.props.rateTwo,
                },
                {

                    label: "🤮",
                    backgroundColor: '#4caf50',
                    borderColor: '#4caf50',
                    data: this.props.rateOne,
                }
                ]
        }
        return (
            <React.Fragment>
                <div className={styles.barChartSize}>
                    <HorizontalBar
                        data={data}
                        height={500}
                        width={700}
                        options={options}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default BarChart;