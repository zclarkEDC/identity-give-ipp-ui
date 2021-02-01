import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {

    render() {
        var oldtitle = this.props.item.title;
        var fixedtitle = oldtitle.replace('&#8482', '\u2122');
        return (

            <div>
                <hr></hr>
                <h2>{fixedtitle}</h2>

                <div class="grid-row">
                    <div class="grid-col-8">
                        <p>{this.props.item.address}<br />{this.props.item.city}, {this.props.item.state} {this.props.item.postalCode}<br /><a href="url">{this.props.item.phone}</a></p>
                    </div>
                    <div class="grid-col-2"></div>
                    <div class="grid-col-2 text-right"><b>{Math.round(this.props.item.distance)} mi</b></div>
                </div>


                <Link to={{
                    pathname: '/details',
                    state: { title: fixedtitle, itema: this.props.item.address, itemb: this.props.item.city, itemc: this.props.item.state, itemd: this.props.item.postalCode, iteme: this.props.item.phone, auth: this.props.auth}

                }}><div class="grid-row"><input type="submit" name="submit"
                    class="btn btn-primary btn-block mt0" value="Select this branch" data-disable-with="Select this branch" /></div></Link>
                <br />
                
            </div>
        );
    }
}

export default Item;

//{ id: 1, name: 'IdentoGO at Staples', street: '223 Langworth Lights', city: 'Colorado Springs', state: 'CO', zip: '80107', distance: '25'},