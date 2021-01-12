import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {

    render() {
        return (
            
                <div>
                    <h2>{this.props.item.name}</h2>

                    <div class="grid-row">
                        <div class="grid-col-8">
                            <p>{this.props.item.street}<br />{this.props.item.city}, {this.props.item.state} {this.props.item.zip}<br /><a href="url">{this.props.item.phone}</a></p>
                        </div>
                        <div class="grid-col-2"></div>
                        <div class="grid-col-2 text-right"><b>{this.props.item.distance} mi</b></div>
                    </div>


                    <Link to={{
                        pathname: '/details',
                        state: { targetItem: this.props.item.name }

                    }}><div class="grid-row"><input type="submit" name="submit"
                        class="btn btn-primary btn-block mt0" data-disable-with="Select this branch" /></div></Link>
                <hr></hr>
                </div>
                
        );
    }
}

export default Item;

//{ id: 1, name: 'IdentoGO at Staples', street: '223 Langworth Lights', city: 'Colorado Springs', state: 'CO', zip: '80107', distance: '25'},