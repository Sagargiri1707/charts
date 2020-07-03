
import { data, schools,clubs,location } from '../data'

const sigmoid = (z) => {
    var val = z / 500
    if (val < 5)
        val = 5
    return val
}
export function mean(numbers) {

    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}
 


export function median(numbers) {
    var median = 0, numsLen = numbers.length;
    numbers.sort();
 
    if (
        numsLen % 2 === 0 // is even
    ) {
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else {
        median = numbers[(numsLen - 1) / 2];
    }
 
    return median;
}
 
 
export const findXAxisData = (XAxis='',Graph) => {
    var XaxisData = []
    var i
     
    if (Graph === 'combo') {
        for ( i in data) {
            XaxisData.push(data[i][XAxis[0]])
        }
    }
    if (XAxis === 'school') {        
        XaxisData = Array.from(schools)
    }
    else if (XAxis === 'location') {
        XaxisData=Array.from(location)
    }
    else if (XAxis === 'clubs') {
        XaxisData=Array.from(clubs)
    }
    else if (Graph === 'scatter' || Graph === 'bubble') {
        
        for (i in data) {
            XaxisData.push(data[i][XAxis])
        }
    }
    
        return XaxisData
}
export const findYAxisData = (YAxis='',Graph,XAxis='') => {
    var YaxisData = []
    console.log(YAxis,XAxis);
    
    var i
    
    if (Graph === 'combo') {
        console.log("gere");
        
        for (i = 0; i < YAxis.length;i++) {            
            var d=[]
            for (var j in data) {
                d.push(data[j][YAxis[i]])
            }
            YaxisData.push(d)
        }
        
    }
    else if (Graph === 'scatter' || Graph === 'bubble') {
        
        for (i in data) {
            YaxisData.push({x:data[i][XAxis],y:data[i][YAxis],r:sigmoid(data[i][YAxis])})
        }
        
    }
    else if (YAxis === '') {
        
        for ( i in data) {
            YaxisData.push(data[i][YAxis])
        }
    }
    else if (YAxis !== '')
        {    
            for (i in data) {
                YaxisData.push(data[i][YAxis])
            }
        }
        return YaxisData
}

export const findData = (Func, Yaxis) => {
    console.log('infinddata',Func,Yaxis);
    
    if (Func === 'mean') {        
        
            return Array(data.length).fill(mean(Yaxis))
            
    }
    else if (Func[0] === 'mean') {
         var d=[]
        Yaxis.map((data,index) => (
            d.push(Array(data.length).fill(mean(Yaxis[index])))
        ))
        
        return d;
    }
    else if (Func === 'median') {
        
            return Array(data.length).fill(median(Yaxis))
    }    
    else if (Func[0] === 'median') {
         d=[]
        Yaxis.map((data,index) => (
            d.push(Array(data.length).fill(median(Yaxis[index])))
        ))
        return d;
    
    }
}