import React,{useEffect} from 'react';
import {Chart} from 'chart.js'

function Bar(props) {
    useEffect(() => {
        var myChart = document.getElementById('myChart').getContext('2d')
        renderChart(myChart)
        console.log(11111);
        
    })
    var { YaxisData, XAxis, YAxis,extra,extravalue } = props.location.state||{}
    console.log(YaxisData);
    YaxisData=YaxisData.sort(function(a, b){return a - b})
    
    const renderChart = (myChart) => {
        new Chart(myChart, {
            type: 'bar',
            data: {
                labels: YaxisData,
                datasets: [
                    extra.length===0?
                    {
                        label:YAxis,
                        data: YaxisData,
                        
                        borderColor: '#111',
                        fill: true,
                        backgroundColor: '#'+Math.random().toString(16).substr(-6),
                        
                    }
                        :
                        {
                            label:YAxis,
                            data: YaxisData,
                            
                            borderColor: 'gray',
                            fill: true,
                            backgroundColor: '#'+Math.random().toString(16).substr(-6),
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
                },
                scales:{ 
                    xAxes: [{
                      display: false,
                      barPercentage: 1.3,
                      ticks: {
                          max: 3,
                      }
                   }, {
                      display: true,
                      ticks: {
                          autoSkip: false,
                          max: 4,
                      }
                    }],
                    yAxes: [{
                      ticks: {
                        beginAtZero:true
                      }
                    }]
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