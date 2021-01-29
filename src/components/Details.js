import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Details extends Component {

    componentDidMount(){
        console.log("the target item is", this.props.location.state.targetItem)
    }
    render() {
        return (
            
                
                <div class="grid-row">
                    <h4>{this.props.location.state.title}</h4>
                    <div class="grid-col-8">
                        {this.props.location.state.itema}<br/>
                        {this.props.location.state.itemb}, {this.props.location.state.itemc} {this.props.location.state.itemd}<br/><a
                            >{this.props.location.state.iteme}</a>

                    </div>
                    <div class="grid-col-1"></div>
                    <div class="grid-col-3"><br/><Link to="/"><a >Change Branch</a></Link></div>
                </div>
            

        );
    }
}

export default Details;