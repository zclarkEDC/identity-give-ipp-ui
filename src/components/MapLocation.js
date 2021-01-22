import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet'

class MapLocation extends Component {

    render() {
        let x = this.props.item.address.geo.lat
        let y = this.props.item.address.geo.lng
        return (

            <div>
                <Marker position={[x,y]}>
                    <Popup>{this.props.item.email}<br /> Easily customizable.</Popup>
                </Marker>

            </div>
        );
    }
}

export default MapLocation;

