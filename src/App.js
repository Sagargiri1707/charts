import React, { useEffect, useState } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css'

import Table from './component/table'
import Chart from './component/chart'
function App() {
  useEffect(() => {
  }, [])
  const [state, setState] = useState({ page: "Chart", class: 'active' })
  const changeState = (data) => {
    setState({
      ...state,
      page:data
    })
  }
  return (
    <div>
      
      <ul className="pagination">
        <li onClick={()=>changeState('Table')} className={`waves-effect link ${state.page==='Table'?'active':''}`}>Table</li>
        <li onClick={()=>changeState('Chart')} className={`waves-effect link ${state.page==='Chart'?'active':''}`}>Chart</li>
      </ul>
      {state.page==='Table'?
      <Table />:
      <Chart/>}
    </div>);
}

export default App;
