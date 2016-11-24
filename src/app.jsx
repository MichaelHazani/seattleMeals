const React = require('react');
const ReactDOM = require('react-dom');
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Nav from 'react-bootstrap/lib/Nav';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import axios from 'axios';

import MealTable from './MealTable.jsx';
import Hero from './Hero.jsx';
import ResourceNav from './ResourceNav.jsx';
import GMap from './GMap.jsx';
import Places from './Places.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Hero/>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="map-container">
                                <GMap/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <ResourceNav/>
                        </Col>
                    </Row>
                    <MealTable/>
                </Grid>
            </div>
        );
    }
};

ReactDOM.render(
    <App/>, document.getElementById('app'));
