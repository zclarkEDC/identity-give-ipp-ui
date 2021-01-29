import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet'

class MapLocation extends Component {

    render() {
        let x = this.props.item.geocode.latitude
        let y = this.props.item.geocode.longitude
        return (

            <div>
                <Marker position={[x,y]}>
                    <Popup> <h1 class="h3 my0" >
            Verify your identity in person
                </h1>{this.props.item.title}<br /> Easily customizable.</Popup>
                </Marker>

            </div>
        );
    }
}

export default MapLocation;

