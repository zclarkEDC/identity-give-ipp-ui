import React from 'react';
import Item from './Item';


class Results extends React.Component {

    constructor(props) {
        super(props);
    }
      
    render() {
        
        return (
            <div id="results" className="search-results">
                <br></br>
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
                {this.props.items.map((item) =>
                    <Item key={item.id} item={item} />
                )}
            </div>

        );
    }
}
export default Results;