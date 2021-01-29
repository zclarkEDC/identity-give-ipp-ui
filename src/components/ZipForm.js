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
    this.state = { value: '', showResults: false, submittedval: '', showError: false, items: [], zipresponse: [], authtoken: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Automatically make call for authentication when page loads
  componentDidMount() {
    //console.log('starting authentication');

    let config = {
      method: 'post',
      url: 'https://give-dev.app.cloud.gov/auth/oauth2/token',
      data: {
        "client_id": "AusOWjdsOJDyTHSRBsX4gVo9Ge09t9Rc",
        "client_secret": "tAIKqzqkEHjYfF4kSFomPwmCLAwzCn73",
        "grant_type": "client_credentials",
        "scope": "rpname",
        "provision_key": "gJHRiS8aCrYVqrdAaRFeoC1zAm7vmOW2",
        "authenticated_userid": "login-demo"
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }

    }

    axios(config)
      .then((response) => {
        //console.log('here is the KONG response', JSON.stringify(response.data));
        this.setState({ authtoken: JSON.parse(JSON.stringify(response.data)) })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    //console.log('inside handle change, checking moth props', event.target.)

  }

  handleSubmit(event) {
    event.preventDefault();
    let zip_input = this.state.value;

    if (postcodeValidator(zip_input, 'US')) {
      //alert('Valid zipcode, beep boop');
      this.setState({ submittedval: this.state.value });
      this.fetchAddressFromZip(this.state.value);

    }
    else {
      //alert('Invalid zipcode, beep boop');
      this.setState({ showResults: false });
      this.setState({ showError: true });
      this.setState({ submittedval: this.state.value });
    }

  }
  fetchData = async values => {
    //const { value } = values; //placeholder for API calls made with the actual zipcode
    var access_token = JSON.stringify(this.state.authtoken.access_token);
    access_token = access_token.replace(/^"(.+(?="$))"$/, '$1');
    var bearer = 'bearer '
    let auth = bearer.concat(access_token);
    var url = "https://give-dev.app.cloud.gov/ipp/locations/";
    var zipsearch = url.concat(values)

    let config = {
      method: 'get',
      url: zipsearch,
      headers: {
        'Authorization': auth
      }
    };
    //console.log(config);
    axios(config)
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        this.setState({ items: JSON.parse(JSON.stringify(response.data)) })
      })
      .catch((error) => {
        console.log(error);
      });
  }


  //This method makes a call to OSM to determine the address based on the Zipcode
  fetchAddressFromZip = async zipcode => {
    //console.log(zipcode);
    let config = {
      method: 'get',
      url: 'https://nominatim.openstreetmap.org/search',
      params: {
        postalcode: zipcode,
        country: 'US',
        format: 'json'
      }
    }
    axios(config)
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        this.setState({ zipresponse: JSON.parse(JSON.stringify(response.data)) })

        //Validate if OSM returned any location results
        if (this.state.zipresponse?.length) {
          //console.log('this array has stuff in it ok? here it is:', this.state.zipresponse)
          this.fetchData(zipcode);
          this.setState({ showResults: true });
          this.setState({ showError: false });


        }
        else {
          console.log('no results found, empty array', this.state.zipresponse)
          this.setState({ showResults: false });
          this.setState({ showError: true });

        }
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

          <h1 class="h3 my0" >
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
              {this.state.showResults ? <Results items={this.state.items} item={this.state.submittedval} itemzip={this.state.zipresponse} /> : null}

            </form>
          </div>
          <div class="mt2 pt1 border-top">
            <a href="https://secure.login.gov/">Cancel</a></div>
        </div>
      </div>

    );
  }
}

export default ZipForm;