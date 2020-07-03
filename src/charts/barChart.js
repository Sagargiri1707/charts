import React,{useEffect} from 'react';
import {Chart} from 'chart.js'

function Bar(props) {
    useEffect(() => {
        var myChart = document.getElementById('myChart').getContext('2d')
        renderChart(myChart)
    })

        const { XaxisData, YaxisData, XAxis, YAxis, extra, extravalue } = props.location.state ||{}
    console.log(extra.length);
    
    const renderChart = (myChart) => {
        new Chart(myChart, {
            type: 'bar',
            data: {
                labels: XaxisData,
                datasets: 
                    extra.length===0?
                    [{
                        label:YAxis,
                        data: YaxisData,
                        
                        borderColor: 'gray',
                        fill: true,
                        backgroundColor: 'gray',
                    }]:
                      [  {
                            label:YAxis,
                            data: YaxisData,
                            
                            borderColor: 'gray',
                            fill: true,
                            backgroundColor: 'gray',
                        },{
                            label:extra,
                            data: extravalue,
                            type:'line',
                            borderColor: 'red',
                            fill: false,
                            backgroundColor: 'red',
                        }   ]
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

export default Bar;