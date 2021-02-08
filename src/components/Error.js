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