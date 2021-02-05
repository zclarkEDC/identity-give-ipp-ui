import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MapLocation from './MapLocation'
class MapResults extends Component {

    render() {
        const zipitemBounds = [
            [this.props.zipitem.boundingbox[0], this.props.zipitem.boundingbox[2]],
            [this.props.zipitem.boundingbox[1], this.props.zipitem.boundingbox[3]]]
        return (
            <div>
                <p>Results near {this.props.zipitem.display_name}</p>
                <br></br>
                <MapContainer bounds={zipitemBounds} zoom={13} scrollWheelZoom={true} style={{width: '100%',height: '270px'}}>
                <TileLayer
                    attribution='hi hector'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.props.coords.map((item) =>
                    <MapLocation key={item.id} item={item} />)}
        </MapContainer>
            </div >
        );
    }
}

export default MapResults;