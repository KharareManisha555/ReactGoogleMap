import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/js/tab.js';
import 'font-awesome/css/font-awesome.min.css';

import '../App.css';


import Enquiry    from '../Enquiry/Enquiry.js';
import Sitemap    from '../Sitemap/Sitemap.js';
import Example    from '../Example/Example.js';
import MapWithAMarkerClusterer    from '../MapWithAMarkerClusterer/MapWithAMarkerClusterer.js';
import MapWithADirectionsRenderer    from '../MapWithADirectionsRenderer/MapWithADirectionsRenderer.js';
import DirectionRenderComponent    from '../DirectionRenderComponent/DirectionRenderComponent.js';
const WebLayout = () => (
  <div className="skin-blue fixed sidebar-mini">    
    <Route path="/"           exact strict component={ MapWithAMarkerClusterer } /> 
    <Route path="/enquiry"    exact strict component={ Enquiry } /> 
    <Route path="/sitemap"    exact strict component={ Sitemap } /> 
    <Route path="/example"    exact strict component={ Example } /> 
    <Route path="/MapWithAMarkerClusterer"    exact strict component={ MapWithAMarkerClusterer } /> 
    <Route path="/MapWithADirectionsRenderer"    exact strict component={ MapWithADirectionsRenderer } /> 
    <Route path="/DirectionRenderComponent"    exact strict component={ DirectionRenderComponent } /> 
  </div>
);


function Routes() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
          {/* <Caraousel/>
          <Sidebar /> */}
          <Switch>
            <Route path="/" component={ WebLayout } />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default Routes;