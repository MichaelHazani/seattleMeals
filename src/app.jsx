const React = require('react');
const ReactDOM = require('react-dom');
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Nav from 'react-bootstrap/lib/Nav';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

import Hero from './Hero.jsx';
import SortBy from './SortBy.jsx';
import GMap from './GMap.jsx';
import Places from './Places.jsx';

const App = React.createClass({

    render: function() {
        return (
            <div>
                <Grid fluid>
                  <Row>
                    <Hero/>
</Row>
<Row>
  <Col xs={12}>
    <SortBy />
  </Col>
</Row>
                  <Row>
                    <Col xs={12}>
                    <div className="map-container">
                        <GMap />
                    </div>
                    </Col>
                    </Row>

                    <Places/>

                </Grid>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>, document.getElementById('app'));
