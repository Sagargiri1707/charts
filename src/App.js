import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css'

import { Switch, Route ,Link} from 'react-router-dom';
import Table from './component/table'
import Chart from './component/chart'
import Pie from './charts/pie'
import Bar from './charts/barChart'
import Scatter from './charts/Scatter';
import ColumnChart from './charts/columnCharts';
import Area from './charts/Area';
import Line from './charts/line'
import Bubble from './charts/bubble'
import Histogram from './charts/Histogram'
import Combo from './charts/combo'

function App() {
  useEffect(() => {
  }, [])
  return (
    <div>
            <Link to="/"><button className="btn btn-wave ">Table</button></Link>
            <Link to="/chart"> <button className="btn btn-wave ">Chart</button></Link>

      <Switch>
        <Route path="/" component={Table} exact />
        <Route path="/table" component={Table} exact/>
        <Route path="/chart" component={Chart} exact/>
        <Route path="/chart/barchart" component={Bar} exact/>
        <Route path="/chart/columnchart" component={ColumnChart} exact/>
        <Route path="/chart/areachart" component={Area} exact/>
        <Route path="/chart/scatterplot" component={Scatter} exact/>
        <Route path="/chart/linechart" component={Line} exact/>
        <Route path="/chart/piechart" component={Pie} exact/>
        <Route path="/chart/histogram" component={Histogram} exact/>
        <Route path="/chart/combochart" component={Combo} exact/>
        <Route path="/chart/bubblechart" component={Bubble} exact/>
      </Switch>
      
    </div>);
}

export default App;
