import React from 'react';
import {data} from '../data'
function Table(props) {
    return (
        <div>
            <table className=" highlight centered responsive-table">
                <thead >
                    <tr><th>School</th>
                        <th>Fees</th>
                        <th>Population</th>
                        <th>Location</th>
                        <th>male</th>
                        <th>female</th>
                        <th>clubs</th>
                    </tr>
                </thead>
                <tbody>
                {
                data.map((data,index) =>{ 
                    return(
                        <tr key={index}>
                            <td>{data.school}</td>
                            <td>{data.fees}</td>
                            <td>{data.population}</td>
                            <td>{data.location}</td>
                            <td>{data.males}</td>
                            <td>{data.females}</td>
                            <td>{data.clubs}</td>
                        </tr>
                    )
                })
             }
                </tbody>
            </table>
            
        </div>
    );
}

export default Table;