import React from 'react';
import Results from './Results';
import { postcodeValidator } from 'postcode-validator';
import ZipInput from './ZipInput';
import Button from './Button';
import Error from './Error';
import axios from 'axios';

class ZipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', showResults: false, submittedval: '', showError: false, items: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let zip_input = this.state.value;
    let values = this.state.value;
    if (postcodeValidator(zip_input, 'US')) {
      //alert('Valid zipcode, beep boop');
      this.setState({ showResults: true });
      this.setState({ showError: false });
      this.setState({ submittedval: this.state.value });
      this.fetchData(values); //make the API call, this will include the actual zipcode for future calls


    }
    else {
      //alert('Invalid zipcode, beep boop');
      this.setState({ showResults: false });
      this.setState({ showError: true });
      this.setState({ submittedval: this.state.value });
    }

  }
  fetchData = async values => {
    const { value } = values; //placeholder for API calls made with the actual zipcode
    let config = {
      method: 'get',
      url: "https://jsonplaceholder.typicode.com/users"
      //data: values this is where the zip info would be placed
    };
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        this.setState({ items: JSON.parse(JSON.stringify(response.data)) })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    return (

      <div class="container">
        <div class="px2 py2 sm-py5 sm-px6 mx-auto sm-mb5 border-box card" role="main">

          {this.state.showError ? <Error item={this.state.submittedval} /> : null}

          <h1 class="h3 my0">
            Verify your identity in person
                </h1>
          <br></br>
          <p class='mt-tiny mb0'>
            You will need to stop by an identity services center to finish verifying your identity.
                </p>
          <div class="mb4">
            <form class="simple_form mt3 sm-mt3 new_user" onSubmit={this.handleSubmit} accept-charset="UTF-8">

              <ZipInput
                name="zip"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                required="required"
                className="block col-12 field string zip required"
                aria-invalid="false"
                aria-required="true"
                id="zip"
              />
              <Button
                type="submit"
                value="Submit"
                label="Search"
                className="btn btn-primary btn-wide"

              />
              {this.state.showResults ? <Results items={this.state.items} item={this.state.submittedval} /> : null}



            </form>
          </div>
          <div class="mt2 pt1 border-top">
            <a href="https://secure.login.gov/">Cancel</a>
          </div>


        </div>
      </div>


    );
  }
}

export default ZipForm;