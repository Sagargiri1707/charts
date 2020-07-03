import React,{useEffect} from 'react';
import {Chart} from 'chart.js'
import { schools } from '../data';


function Bubble(props) {
    useEffect(() => {
        var myChart = document.getElementById('myChart').getContext('2d')
        renderChart(myChart)
    })
    
    const {  YaxisData, XAxis, YAxis } = props.location.state
    //console.log(XaxisData);
    
    
    const renderChart = (myChart) => {
        new Chart(myChart, {
            type: 'bubble',
            data: {
                labels: schools,
                datasets: 
                    schools.map((data, index) => {
                   return {
                        label:data,
                        data: [YaxisData[index]],
                        backgroundColor:'#'+Math.random().toString(16).substr(-6),
                        borderColor: 'gray',
                        fill: true,
                    }
                    }) 
                
                
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

export default Bubble;