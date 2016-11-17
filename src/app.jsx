const React = require('react');
const ReactDOM = require('react-dom');
import {Button} from 'react-bootstrap';

import Hero from './Hero.jsx';
import GMap from './GMap.jsx';
import Places from './Places.jsx';

const App = React.createClass({

    render: function() {
        return (
            <div>
                <div className="container-fluid">
                    <Hero/>

                    <div style={{
                        width: 1200,
                        height: 1200,
                    }}>
                        <GMap />
                    </div>
                    <Places/>

                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>, document.getElementById('app'));
