import React, { useEffect } from 'react';
import { data, schools } from '../data'
import {Chart} from 'chart.js'
import { mean,median,mode} from './utilities'
const findAxisData = (data, YAxis='',XAxis='',Graph) => {
    var XaxisData = [],YaxisData=[]
    var i
    if (XAxis === 'school') {
        console.log(1);
        
        XaxisData = Array.from(schools)
        for (i in data) {
            YaxisData.push(data[i][YAxis])
        }

    }
    else if (Graph === 'scatter' || Graph === 'bubble') {
        
        for (i in data) {
            XaxisData.push(data[i][XAxis])

            YaxisData.push({x:data[i][XAxis],y:data[i][YAxis],r:3})
        }
    }
    else{
        if (XAxis === '') {
        
        for ( i in data) {
            XaxisData.push(data[i]['school'])
            YaxisData.push(data[i][YAxis])

        }
    }
        if (YAxis === '') {
         
        for ( i in data) {
            XaxisData.push(data[i][XAxis])
            YaxisData.push(data[i]['school'])
        }

        }
        if (XAxis !== '' && YAxis !== '')
        {
            
            for (i in data) {
                XaxisData.push(data[i][XAxis])
                YaxisData.push(data[i][YAxis])
            }
        }
        
    }
    
        return {XaxisData,YaxisData}

}



function ChartDisplay(props) {
    const { YAxis,XAxis,Graph } = props.data
    const {XaxisData,YaxisData}=findAxisData(data,YAxis,XAxis,Graph)
    useEffect(() => {
        var myChart = document.getElementById('myChart').getContext('2d')
        renderChart(myChart)
    }, [])
    console.log(props.data);
    
    const extra = (modes) => {
        console.log(123);
        

        if (modes === 'G.mean') {            
            const d = mean(XaxisData)
            console.log(d);
            
            return new Array(data.length).fill(d)
        }
        if (modes === 'I.mean') {
            const d=mean(YaxisData)
            return new Array(data.length).fill(d)
        }
        if (modes === 'G.median') {
            const d = median(XaxisData)
            console.log(d);
            
            return new Array(data.length).fill(d)
        }
        if (modes === 'I.median') {
            const d=median(YaxisData)
            return new Array(data.length).fill(d)
        }
        if (modes === 'G.mode') {
            return mode(YaxisData)
        }
        if (modes === 'I.mode') {
            return mode(XaxisData)
        }        
    }
    const extraData=extra(props.data.extra)
    console.log(extraData);
    console.log(XaxisData);
    console.log(YaxisData);
    
    
    
    
    const renderChart = (myChart) => {
        new Chart(myChart, {
            type: `${props.data.Graph}`,
            data: {
                labels: XaxisData,
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
                        fill:props.data.fill?true:false,

                    }, props.data.extra.length > 0 ? {
                        type:'line',
                        label: `${props.data.extra}`,
                        data: extraData,
                        showLine: true,
                        fill: 'red',
                        backgroundColor: 'red'
                    } : {
                            label: '',
                            backgroundColor: 'white',
                            color:'white',
                            borderColor: 'white',
                    }]
            },
            options: {
                title: {
                    display: true,
                    text:`${XAxis} X ${YAxis}`
                },
                scales:props.data.Graph==='bar'&&props.data.stacked===1? { 
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
                  }:{}
            }
         })
    }
    return (
        <>
            <div id="container">
                <canvas id="myChart"></canvas>
           </div>
        </>
    );
}

export default ChartDisplay;