import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LineItem from './LineItem';
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
                        <LineItem {...this.props.item}/></div><div class="grid-col-2"></div><div class="grid-col-2 text-right"><b>{Math.round(this.props.item.distance)} mi</b></div></div>
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