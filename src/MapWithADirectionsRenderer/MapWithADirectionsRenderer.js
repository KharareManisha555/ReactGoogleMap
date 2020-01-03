import React, { Component } from 'react';
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import { MarkerClusterer } from"react-google-maps/lib/components/addons/MarkerClusterer";
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key="+KEY+"&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `700px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
    //   const places = [
    //     {latitude: 18.5204,longitude: 73.8567},
    //     {latitude: 19.9975,longitude: 73.7898},
    //   ]
    //   const waypoints = places.map(p =>({
    //       location: {lat: p.latitude, lng:p.longitude},
    //       stopover: true
    //   }))
    // const origin = waypoints.shift().location;
    // const destination = waypoints.pop().location;
      DirectionsService.route({
        origin: new window.google.maps.LatLng(18.5204, 73.8567),
        destination: new window.google.maps.LatLng(18.5679, 73.9143),
        waypoints: [
                    {location: new window.google.maps.LatLng(19.0760, 72.8777), stopover: true}, 
                    {location: new window.google.maps.LatLng(19.9975, 73.7898), stopover: true}, 
                  ], //Add your multiple (live tracking) location (Lat, Long) in waypoints to highlight path
        travelMode: window.google.maps.TravelMode.DRIVING,
      },(result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(18.5204, 73.8567)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);
export default class MapWithADirectionsRenderer extends Component {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    // const DirectionsService = new window.google.maps.DirectionsService();
    // var a = new window.google.maps.LatLng(18.5204, 73.8567)
    // console.log(DirectionsService, a)
    // DirectionsService.route({
    //   origin: new window.google.maps.LatLng(18.5204, 73.8567),
    //   destination: new window.google.maps.LatLng(19.0760, 72.8777),
    //   travelMode: window.google.maps.TravelMode.DRIVING,
    // }, (result, status) => {
    //     console.log('status', status )
    //     console.log('result', result, window.google.maps.DirectionsStatus.OK )
    //   if (status === window.google.maps.DirectionsStatus.OK) {
    //     this.setState({
    //       directions: result,
    //     });
    //   } else {
    //     console.error(`error fetching directions ${result}`);
    //   }
    // });
  }
  render() {
      console.log(this.state.directions)
    return (
      <MyMapComponent isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key="KEY"&callback=initMap"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `700px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      markers={this.state.markers}
      directions={this.state.directions}
      />
      )
    }
}