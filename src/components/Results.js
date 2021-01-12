import React from 'react';
import Item from './Item';


class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //This example API response will be replaced with an response from the give-ipp-idemia api
            //It exists purely to test looping through a JSON array of objects
            example_api_response: [
                { id: 1, name: 'IdentoGO at Staples', street: '223 Langworth Lights', city: 'Colorado Springs', state: 'CO', zip: '80107', distance: '25', phone: '555-123-6400' },
                { id: 2, name: 'IdentoGO at TWIC', street: '123 Street', city: 'Colorado Springs', state: 'CO', zip: '80107', distance: '36', phone: '555-123-6400' },
                { id: 3, name: 'IdentoGO at Somewhere', street: '321 Court', city: 'Colorado Springs', state: 'CO', zip: '80107', distance: '43', phone: '555-123-6400' },
                { id: 4, name: 'IdentoGO at Somewhere Else', street: '999 Avenue', city: 'Colorado Springs', state: 'CO', zip: '80107', distance: '49', phone: '555-123-6400' },
            ]
        }
    }


    render() {

        return (
            <div id="results" className="search-results">
                <hr>
                </hr>
                <p class='mt-tiny mb0'>
                    Results near postal code {this.props.item}
                </p>
                <br></br>
                <p>This is where the map will go.</p>
                <br></br>

                <hr>
                </hr>


                {this.state.example_api_response.map((item) =>
                    <Item key={item.id} item={item} />
                )}
            </div>

        );
    }
}
export default Results;