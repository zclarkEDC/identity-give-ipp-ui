import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet'
import LineItem from './LineItem'

class MapLocation extends Component {

    render() {
        var oldtitle = this.props.location.title;
        var fixedtitle = oldtitle.replace('&#8482', '\u2122');
        let x = this.props.location.geocode.latitude
        let y = this.props.location.geocode.longitude
        return (

            <div>
                <Marker position={[x,y]}>
                    <Popup> <h6>{fixedtitle}</h6><LineItem {...this.props.location}/></Popup>
                </Marker>
            </div>
        );
    }
}

export default MapLocation;

