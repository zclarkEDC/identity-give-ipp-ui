/*
import React from 'react';

class Error extends React.Component {

    constructor(props) {
        super(props);
   
    }
    render() {

        return (
            <div>
                <br></br>
                <br></br>
                <p class='mt-tiny mb0'>
                    Error! {this.props.item} is not a valid zip code!
                </p>
            </div>

        );
    }
}
export default Error;


*/

import React from 'react';

class Error extends React.Component {

    constructor(props) {
        super(props);
   
    }
    render() {

        return (
            <div class="usa-alert usa-alert--error margin-bottom-4" role="alert">
               <div class="usa-alert__body">
               <p class="usa-alert__text">
                    Error! {this.props.item} is not a valid zip code!
                </p>
            </div>
            </div>

        );
    }
}
export default Error;
/*
<div class="usa-alert usa-alert--error margin-bottom-4" role="alert">
            <div class="usa-alert__body">
            <p class="usa-alert__text">The email or password you've entered is wrong. Try resetting your password.</p>
            </div>
            </div>*/