import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const defaultOptions = {
  // styles: [mapStyles],
  // mapTypeId: props.mapTypeId,
  mapTypeControl: false,
  zoomControl: true,
  streetViewControl: true,
  draggableCursor: 'default',
  draggingCursor: 'move'
};
const MyMapComponent = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
  
    defaultZoom={8}
    defaultCenter={{ lat: 18.5204, lng: 73.8567 }}
    defaultVisible = {false}
    defaultZoom={12}
    defaultOptions={defaultOptions}
    options={{
      ...defaultOptions,
      draggableCursor: props.cursor
    }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 18.5204, lng: 73.8567 }}  />}
  </GoogleMap>
))

{/* <MyMapComponent isMarkerShown /> */}



export default class Example extends Component {
  render() {
    return (
      <MyMapComponent isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key="KEY"&callback=initMap"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `700px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
      )
    }
}