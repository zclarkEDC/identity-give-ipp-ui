import React from 'react';
import Results from './Results';
import {postcodeValidator} from 'postcode-validator';
import ZipInput from './ZipInput';
import Button from './controls/Button';
import Error from './Error';
import axios from 'axios';

class ZipForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showResults: false,
            submittedval: '',
            showError: false,
            items: [],
            zipresponse: [],
            authtoken: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Automatically make call for authentication when page loads
    componentDidMount() {
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
                this.setState({authtoken: JSON.parse(JSON.stringify(response.data))})
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let zip_input = this.state.value;

        if (postcodeValidator(zip_input, 'US')) {
            this.setState({submittedval: this.state.value});
            this.fetchAddressFromZip(this.state.value);

        } else {
            this.setState({showResults: false});
            this.setState({showError: true});
            this.setState({submittedval: this.state.value});
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
        axios(config)
            .then((response) => {
                this.setState({items: JSON.parse(JSON.stringify(response.data))})
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //This method makes a call to OSM to determine the address based on the Zipcode
    fetchAddressFromZip = async zipcode => {
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
                this.setState({zipresponse: JSON.parse(JSON.stringify(response.data))})
                //Validate if OSM returned any location results
                if (this.state.zipresponse?.length) {
                    this.fetchData(zipcode);
                    this.setState({showResults: true});
                    this.setState({showError: false});
                } else {
                    console.log('no results found, empty array', this.state.zipresponse)
                    this.setState({showResults: false});
                    this.setState({showError: true});
                }
            })
            .catch((error) => {
                console.log(error);
            }); }
    render() {
        return (
            <div className="grid-container">
                <div className="grid-row">
                    <div className="grid-col" role="main">
                        {this.state.showError ? <Error item={this.state.submittedval}/> : null}

                        <form className="usa-form usa-form--large" onSubmit={this.handleSubmit} accept-charset="UTF-8">
                            <fieldset className="usa-fieldset">
                                <legend className="usa-legend">Verify your identity in person</legend>

                                <p>You will need to stop by an identity services center to finish verifying your
                                    identity.</p>

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
                                {this.state.showResults ?
                                    <Results items={this.state.items} item={this.state.submittedval}
                                             itemzip={this.state.zipresponse}/> : null}
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default ZipForm;