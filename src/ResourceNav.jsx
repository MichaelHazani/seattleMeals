const React = require('react');
import {Jumbotron} from 'react-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
export default class ResourceNav extends React.Component {

componentWillMount = function() {
    this.setState({
      activeTab: "food"
    });
  }

clickedTab = (e) => {
this.setState({activeTab: e});
}

    render() {
        return (
          <Row>
            <Col xs={12}>
              <Nav bsStyle="tabs" className="center" onSelect={this.clickedTab}>
                  <NavItem eventKey="food" className={(this.state.activeTab === "food") ? "active" : ""}>Food</NavItem>
                  <NavItem eventKey="shelter" className={(this.state.activeTab === "shelter") ? "active" : ""}>Shelter</NavItem>
                  <NavItem eventKey="medical" className={(this.state.activeTab === "medical") ? "active" : ""}>Medical</NavItem>
                  <NavItem eventKey="other" className={(this.state.activeTab === "other") ? "active" : ""}>Other</NavItem>
{/*
                <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Action</MenuItem>
                    <MenuItem eventKey="4.2">Another action</MenuItem>
                    <MenuItem eventKey="4.3">Something else here</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey="4.4">Separated link</MenuItem>
                </NavDropdown>

*/}
                            </Nav>
                          </Col>
                            </Row>
        );
    }

};
