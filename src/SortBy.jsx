const React = require('react');
import {Jumbotron} from 'react-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
class SortBy extends React.Component {

    render() {
        return (
          <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
  <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
  <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
  <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
  <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
    <MenuItem eventKey="4.1">Action</MenuItem>
    <MenuItem eventKey="4.2">Another action</MenuItem>
    <MenuItem eventKey="4.3">Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey="4.4">Separated link</MenuItem>
  </NavDropdown>
</Nav>
        );
    }

};

export default SortBy;
