import React from 'react';
import Item from './Item';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MapLocation from './MapLocation'


class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="results" className="search-results">
        <br></br>
        <hr>
        </hr>
        <p class='mt-tiny mb0'>
          Results near postal code {this.props.item}
        </p>
        <br></br>
        <MapContainer center={[38.91390733397534, -77.21661199423156]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.items.map((item) =>
          <MapLocation key={item.id} item={item} />)}
        </MapContainer>
        <br></br>
        <hr>
        </hr>
        {this.props.items.map((item) =>
          <Item key={item.id} item={item} />)}
        
      </div>

    );
  }
}
export default Results;