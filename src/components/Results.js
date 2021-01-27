import React from 'react';
import Item from './Item';
import MapResults from './MapResults';

class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const coords = this.props.items;

    return (
      <div id="results" className="search-results">
        <br></br>
        <hr>
        </hr>
        {this.props.itemzip.map((zipitem) =>
          <MapResults key={zipitem.place_id} zipitem={zipitem} coords={coords} />)}
        <br></br>
        <br></br>
        <hr>
        </hr>
        {this.props.items.map((item) =>
          <Item key={item.id} item={item} />)}
      </div>
    );
  }
}
export default Results;