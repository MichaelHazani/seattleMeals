const React = require('react');
class Places extends React.Component {
  render() {
    return(
      <div>
This is the PLACES component
      </div>
    )
  }
}

export default Places;









































// const React = require('react');
// import shouldPureComponentUpdate from 'react-pure-render/function';
//
// import GoogleMap from 'google-map-react';
//
// export default class GMap extends React.Component {
//
//     static defaultProps = {
//         center: [59.938043, 30.337157],
//         zoom: 9,
//         greatPlaceCoords: {
//             lat: 59.724465,
//             lng: 30.080121
//         }
//     };
//
//     shouldComponentUpdate = shouldPureComponentUpdate;
//
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             // <div className="map-container">
//                 <GoogleMap center={this.props.center} zoom={this.props.zoom} bootstrapURLKeys={{
//     key:'AIzaSyDsYcnnBhKh3IleWg3TJfC2CCIj-7SE_Nw'}}></GoogleMap>
//             // </div>
//         );
//     }
// }
