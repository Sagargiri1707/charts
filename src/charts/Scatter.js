import React,{useEffect} from 'react';
import {Chart} from 'chart.js'


function Scatter(props) {
    useEffect(() => {
        var myChart = document.getElementById('myChart').getContext('2d')
        renderChart(myChart)
    }, [])
    const { XaxisData, YaxisData, XAxis, YAxis } = props.location.state
    //console.log(XaxisData);
    //console.log(YaxisData);
    
    
    const renderChart = (myChart) => {
        new Chart(myChart, {
            type: 'scatter',
            data: {
                labels: XaxisData,
                datasets:  YaxisData.map((data, index) => {
                    return  {
                        label:YAxis[index],
                        data: data,
                        backgroundColor: '#'+Math.random().toString(16).substr(-6),
                        borderColor: '#111',
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

export default Scatter;