import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Details extends Component {

    componentDidMount(){
        //const {targetItem} = this.props.location.state.targetItem
        console.log("the target item is", this.props.location.state.targetItem)
    }
    render() {
        return (
            
                
                <div class="grid-row">
                    <div class="grid-col-8">
                        <h4>{this.props.location.state.targetItem}</h4>223 Langworth Lights<br/>Colorado Springs, CO 80107<br/><a
                            >555-123-6409</a>

                    </div>
                    <div class="grid-col-1"></div>
                    <div class="grid-col-3"><br/><br/><br/><Link to="/"><a >Change Branch</a></Link></div>
                </div>
            

        );
    }
}

export default Details;

