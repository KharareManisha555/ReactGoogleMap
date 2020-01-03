import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
// import demoFancyMapStyles  from "./demoFancyMapStyles.json";
import { MarkerClusterer } from"react-google-maps/lib/components/addons/MarkerClusterer";
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
    defaultZoom={5}
    defaultOptions={defaultOptions}
    options={{
      ...defaultOptions,
      draggableCursor: props.cursor
    }}
  >
    <InfoBox
      defaultPosition={new window.google.maps.LatLng(18.5204, 73.8567)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          Hello, Taipei!
        </div>
      </div>
    </InfoBox>
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
    {/*props.isMarkerShown && <Marker position={{ lat: 18.5204, lng: 73.8567 }}  />*/}
    {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
))

{/* <MyMapComponent isMarkerShown /> */}



export default class MapWithAMarkerClusterer extends Component {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    ].join("")

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ markers: data.photos });
      });
  }
  render() {
    return (
      <MyMapComponent isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key="KEY"&callback=initMap"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `700px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      markers={this.state.markers}
      />
      )
    }
}