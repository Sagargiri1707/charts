import React,{useEffect} from 'react';
import {Chart} from 'chart.js'


function Bar(props) {
    useEffect(() => {
        var myChart = document.getElementById('myChart').getContext('2d')
        renderChart(myChart)
    })
    const { XaxisData, YaxisData, XAxis, YAxis,extra,extravalue } = props.location.state
    
    
    const renderChart = (myChart) => {
        new Chart(myChart, {
            type: 'bar',
            data: {
                labels: XaxisData,
                datasets: 
                    extra.length===0?
                    YaxisData.map((data, index) => {
                        return  {
                            label:YAxis[index],
                            data: data,
                            backgroundColor: '#'+Math.random().toString(16).substr(-6),
                            borderColor: '#111',
                        }
                    })
                        :
                        YaxisData.map((data, index) => {
                            return  {
                                label:YAxis[index],
                                data: data,
                                backgroundColor: '#'+Math.random().toString(16).substr(-6),
                                borderColor: '#111',
                            }
                        }).concat(
                            extravalue.map((id,i) => (
                                {
                                    label:extra+'('+YAxis[i]+')',
                                    data: id,
                                    type:'line',
                                    borderColor: '#'+Math.random().toString(16).substr(-6),
                                    fill: false,
                                    backgroundColor: '#'+Math.random().toString(16).substr(-6),
                                }  
                            ))
                          )
                
                        
                   
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