import React, {Component} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

class GMap extends Component {
static defaultProps = {
  center: {lat: 47.6062, lng: -122.3321}
  }

    render() {

        const mapContainer = <div style={{
            height: '100%',
            width: '100%'
        }}></div>

        return (<GoogleMapLoader containerElement={mapContainer} googleMapElement= {
          <GoogleMap
        defaultZoom = {11}
        defaultCenter = {this.props.center}
        options = {{streetViewControl: false, mapTypeControl: false, scrollwheel: false}}>
      </GoogleMap>
    } />
  )
    }
}

export default GMap;
