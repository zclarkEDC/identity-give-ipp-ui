import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet'

class MapLocation extends Component {

    render() {
        var oldtitle = this.props.item.title;
        var fixedtitle = oldtitle.replace('&#8482', '\u2122');
        let x = this.props.item.geocode.latitude
        let y = this.props.item.geocode.longitude
        return (

            <div>
                <Marker position={[x,y]}>
                    <Popup> <h6>{fixedtitle}</h6><p>{this.props.item.address}<br />{this.props.item.city}, {this.props.item.state} {this.props.item.postalCode}<br /><a href="url">{this.props.item.phone}</a></p></Popup>
                </Marker>

            </div>
        );
    }
}

export default MapLocation;

