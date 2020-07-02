import React, { useEffect, useState } from 'react';
import M from 'materialize-css'
import Display from './chartDisplay'
import { charts } from './chartData'

function Chart(props) {
    const [state, setState] = useState({
        Graph: 'bar',
        YAxis: '',
        XAxis: '',
        extra:''
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
        
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
        
    }
    const setData = (e) => {        
        setState({
            ...state,
            [e.target.name]: JSON.parse(e.target.value).value,
            fill: JSON.parse(e.target.value).fill,
            stacked:JSON.parse(e.target.value).stacked
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
        <Display data={state}/>
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
                        <div className="input-field col s6">
                            <select name="YAxis" required  onChange={changeHandler}>
                                <option value="" defaultValue>Y Axis</option>
                                <option value="fees">Fees</option>
                                <option value="population">Population</option>
                                <option value="males">Males</option>
                                <option value="females">Females</option>
                            </select>
                            <label>Choose Y axis</label>

                        </div>
                        <div className="input-field col s6">
                            <select name="XAxis" required  onChange={changeHandler}>
                                <option value="" defaultValue >X Axis</option>
                        
                                <option value="population">Population</option>
                                <option value="school">School</option>
                                <option value="fees">Fees</option>
                                <option value="males">Males</option>
                                <option value="females">Females</option>
                            </select>
                            <label>Choose X axis</label>
                        </div>
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
                            <option value="G.mean">G.Mean</option>
                            <option value="G.median">G.Median</option>
                            <option value="I.mean">I.Mean</option>
                            <option value="I.median">I.Median</option>
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