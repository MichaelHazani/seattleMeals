const React = require('react');
import {Jumbotron} from 'react-bootstrap';

class Hero extends React.Component {

    render() {
        return (
            <Jumbotron className="jumbo">
                <div className="jumbo-overlay">
                    <div className="jumbo-text"><h1>SEATTLE SAMARITANS</h1>
                    <h3>Free Local Food, Shelter, & Medical Resources</h3>
                    </div>

                </div>
            </Jumbotron>
        );
    }

};

export default Hero;
