import React, { useEffect, useState } from 'react';
import M from 'materialize-css'
//import Display from './chartDisplay'
import { charts } from './chartData'
import RDisplay from './r_display'
function Chart(props) {
    const [state, setState] = useState({
        Graph: 'bar',
        YAxis: '',
        XAxis: '',
        extra: '',
        sname:'barchart'
    })
    const [item,setItem]=useState({input:2})
    const [redirect,setredirect]=useState(0)
    useEffect(() => {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems)
    })
    
    const submitForm = (e) => {
        e.preventDefault()        
        setredirect(1)
        
    }
    
    const changeHandler = (e) => {
        
        if (item.value === 'combo') {

            var options = e.target.options;
            var d=[]
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    d.push(options[i].value)                    
                }
            }
            setState({
                ...state,
                [e.target.name]:d
            })

        }
        else
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
        
    }
    const setData = (e) => {        
        const d=JSON.parse(e.target.value)
        setState({
            ...state,
            [e.target.name]: d.value,
            fill:   d.fill,
            stacked: d.stacked,
            sname:d.sname
        })
        const { name, value, input, stacked } = JSON.parse(e.target.value)
        setItem({
            ...item,
            input,
            stacked,
            name,
            value
        })
        
    }
    if (redirect) {
        return(
        <RDisplay data={state}/>
        )
    }
    else
    return (
        <div>
            <form onSubmit={submitForm} style={{padding:'20px'}}>
            <div className="input-field col s6" >
                <select name="Graph" required onChange={setData}>
                    <option value=""   disabled>Graph</option>

        
                        {charts.map((data, index) => {
                            
                            return (
                                <option value={JSON.stringify(data)} key={index} >{data.name}</option>
                        )
                    })}        
                </select>
                    <label>Select Graph type</label>
                </div>
                
                {item?item.input === 2 ?
                    <div>
                        <div className={`input-field col s6 `}>
                            {item.value === 'combo' ?
                                <>
                                    
                                    <select name="YAxis" multiple required onChange={changeHandler} >
                                        <option value="" defaultValue aria-disabled>Y Axis</option>
                                        <option value="fees" >Fees</option>
                                        <option value="population">Population</option>
                                        <option value="males">Males</option>
                                        <option value="females">Females</option>
                                    </select>
                                        <label>Choose Y axis</label>
                                    
                                    

                                </> :
                                <>
                                    <select name="YAxis"  required onChange={changeHandler}>
                                        <option value="" defaultValue>Y Axis</option>
                                        <option value="fees">Fees</option>
                                        <option value="population">Population</option>
                                        <option value="males">Males</option>
                                        <option value="females">Females</option>
                                    </select>
                                    <label>Choose Y axis</label>
                                </>
                                
                            }
                            

                        </div>
                        {item.value === 'scatter'||item.value === 'bubble' ?
                             
                        <div className="input-field col s6">
                        <select name="XAxis" required  onChange={changeHandler}>
                            <option value="" defaultValue>X Axis</option>
                            <option value="fees">Fees</option>
                            <option value="population">Population</option>
                            <option value="males">Males</option>
                            <option value="females">Females</option>
                        </select>
                        <label>Choose X axis</label>

                            </div>
                            :
                             <div className="input-field col s6">
                             <select name="XAxis" required  onChange={changeHandler}>
                                 <option value="" defaultValue >X Axis</option>
                         
                                 <option value="location">School Location</option>
                                 <option value="school">School</option>
                                 <option value="clubs">clubs</option>
                             </select>
                             <label>Choose X axis</label>
                         </div>
                        }
                    </div> : <>
                         <div className="input-field col s6">
                            <select name="YAxis" required onChange={changeHandler}>
                                <option value="" defaultValue>Your input data</option>
                                <option value="fees">Fees</option>
                                <option value="population">Population</option>
                                <option value="males">Males</option>
                                <option value="females">Females</option>
                            </select>
                            <label>Choose the axis</label>

                        </div>
                        
                    </>

                    :
                    <></>

                    }
                
                    <div className="input-field col s6">
                    <select name="extra" onChange={changeHandler}>        
                            <option value="" defaultValue>Extra methods</option>
                            <option value="mean">Mean</option>
                            <option value="median">Median</option>
                        </select>
                        <label>Extra Statistics</label>

                    </div>
                <button type="submit" className="btn btn-waves">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Chart;