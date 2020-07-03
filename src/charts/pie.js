import React,{useEffect} from 'react';
import {Chart} from 'chart.js'
import { schools } from '../data';


function Pie(props) {
    useEffect(() => {
        var myChart = document.getElementById('myChart').getContext('2d')    
        
        renderChart(myChart)
    })
    

    const { XaxisData, YaxisData, XAxis, YAxis } = props.location.state||{}
    console.log(XaxisData,YaxisData);
    
    const renderChart = (myChart) => {
        new Chart(myChart, {
            type: 'pie',
            data: {
                labels: schools,
                datasets: [
                    {
                        label:XAxis,
                        data: YaxisData,
                        backgroundColor: [
                            'rgba(155,9,123,0.6)',
                            'rgba(255,199,123,0.6)',
                            'rgba(255,9,23,0.6)',
                            'rgba(12,9,1,0.6)',
                            'rgba(21,119,11,0.6)',
                            'rgba(12,12,23,0.6)',
                            'rgba(2,95,135,0.6)',
                            'rgba(112,199,13,0.6)',
                            'rgba(134,12,42,0.6)',
                            'rgba(255,99,123,0.6)',
                            'rgba(135,99,13,0.6)',
                            'rgba(25,4,223,0.6)',
                        ],
                        borderColor: '#111',

                    }]
            },
            options: {
                title: {
                    display: true,
                    text:`${XAxis} X ${YAxis}`
                }
            }
         })
    }
    


    return (
        <div id="container">
            <canvas id="myChart"></canvas>
        </div>

    );
}

export default Pie;