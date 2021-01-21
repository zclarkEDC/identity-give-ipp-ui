import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {

    render() {
        return (

            <div>
                <h2>{this.props.item.email}</h2>

                <div class="grid-row">
                    <div class="grid-col-8">
                        <p>{this.props.item.address.street}<br />{this.props.item.address.city}, {this.props.item.address.state} {this.props.item.address.zipcode}<br /><a href="url">{this.props.item.phone}</a></p>
                    </div>
                    <div class="grid-col-2"></div>
                    <div class="grid-col-2 text-right"><b>10 mi</b></div>
                </div>


                <Link to={{
                    pathname: '/details',
                    state: { targetItem: this.props.item.email, itema: this.props.item.address.street, itemb: this.props.item.address.city, itemc: this.props.item.address.state, itemd: this.props.item.address.zipcode, iteme: this.props.item.phone }

                }}><div class="grid-row"><input type="submit" name="submit"
                    class="btn btn-primary btn-block mt0" value="Select this branch" data-disable-with="Select this branch" /></div></Link>
                <br />
                <hr></hr>
            </div>
        );
    }
}

export default Item;

//{ id: 1, name: 'IdentoGO at Staples', street: '223 Langworth Lights', city: 'Colorado Springs', state: 'CO', zip: '80107', distance: '25'},