import React from 'react';
import { Redirect } from 'react-router-dom';
import { findXAxisData,findYAxisData,findData} from './utilities'
function R_display(props) {
    const XaxisData = findXAxisData(props.data.XAxis,props.data.Graph)
    const YaxisData = findYAxisData(props.data.YAxis,props.data.Graph,props.data.XAxis)
    const extravalue=findData(props.data.extra,YaxisData)
    return (
        <div>
            
            <Redirect to={{
                pathname: `/chart/${props.data.sname}`,
                state: { 
                    XAxis: props.data.XAxis,
                    YAxis: props.data.YAxis,
                    XaxisData,
                    YaxisData,
                    extra: props.data.extra,
                    extravalue
                }
            }}/>
        </div>
    );
}

export default R_display;