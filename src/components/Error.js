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