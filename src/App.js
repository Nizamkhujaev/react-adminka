import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Tickets from './pages/tickets/tickets';
import Overview from './pages/overview/Overview';
import Idea from './pages/Ideas/Idea';
import SideBar from './containers/Sidebar/sidebar';
import Header from './containers/header/header'

function App() {

  const [activePage, setActivePage] = useState('');

  return (
    <Router>
      <div className="App">

        <div className="mainn-sidebar">
          <SideBar activePage={activePage} setActivePage={setActivePage} />
        </div>


          <div className="app-right">
            <Header activePage={activePage}/>
            <Switch>
                <Route path="/Tickets" component={Tickets}/>
                <Route path="/Overview" component={Overview} />
                <Route path="/Idea" component={Idea} />

            </Switch>
          </div>

      </div>
    </Router>
  );
}

export default App;
