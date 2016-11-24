const React = require('react');

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Table from 'react-bootstrap/lib/Table';

import {default as UUID} from "node-uuid";
import axios from 'axios';

export default class MealTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            freeMealItems: [],
            tableRows: []

        };
    }

    componentDidMount() {
        axios.get('https://data.seattle.gov/resource/47rs-c243.json').then(res => {
            this.setState({freeMealItems: res.data});

        });
        this.state.freeMealItems.forEach((mealItem) => {
            this.state.tableRows.push(
                <tr>
                    <td key={freeMealItmes.name_of_program}>ga</td>
                </tr>
            );
            this.state.tableRows[mealItem].id = UUID.v4();;
        })

    }

    render() {
        return (
            <Row className="info-display">
                <Col xs={12}>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Name of Program</th>
                                <th>When</th>
                                <th>Where</th>
                                <th>Meal Served</th>
                                <th>People Served</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.freeMealItems.map(function(item, index) {
                                return (
                                    <tr key={index}>
                                        <td>{item.name_of_program}</td>
                                        <td>{item.day_time}</td>
                                        <td>{item.location}</td>
                                        <td>{item.meal_served}</td>
                                        <td>{item.people_served}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>

        );
    }
};
