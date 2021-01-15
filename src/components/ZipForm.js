/* old first PR
import React from 'react';
import Results from './Results'
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';

class ZipForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', showResults: false, submittedval: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      let zip_input = this.state.value;
      if (postcodeValidator(zip_input, 'US')){
        alert('Valid zipcode, beep boop');
      }
      this.setState({showResults: true});
      this.setState({submittedval: this.state.value});
      
    }
  
    render() {
        
      return (


        <div class="container">
            <div class="px2 py2 sm-py5 sm-px6 mx-auto sm-mb5 border-box card" role="main">

                <h1 class="h3 my0">
                    Verify your identity in person
                </h1>
                <br></br>
                <p class='mt-tiny mb0'>
                    You will need to stop by an identity services center to finish verifying your identity.
                </p>

                <div class="mb4">
                    <form class="simple_form mt3 sm-mt3 new_user" id="new_user" autocomplete="off" role="form"
                        data-validate="true" onSubmit={this.handleSubmit} accept-charset="UTF-8"
                        method="get"><input name="utf8" type="hidden" value="✓"/><input type="hidden"/>
                        <div class="mb3 zip required zip"><label class="bold zip required" for="zip"><abbr
                                    title="required" pattern="^\d{5}(?:[-\s]\d{4})?$" class="red display-none">*</abbr> Find an
                                identity services center near you:</label>
                            <div class="mb1 text-hint">
                                <span>Enter postal code</span>
                            </div>
                            <input class="block col-12 field string zip required" aria-invalid="false"
                                required="required" aria-required="true" type="number" name="zip" id="zip" pattern="^\d{5}(?:[-\s]\d{4})?$" value={this.state.value} onChange={this.handleChange}/>
                        </div>

                        <input type="submit" name="commit" value="Submit" class="btn btn-primary btn-wide"
                            data-disable-with="Submit"/>
                            { this.state.showResults ? <Results item={this.state.submittedval}/> : null }
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
  
 */

//working with valid zip
/*
import React from 'react';
import Results from './Results';
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';
import ZipInput from './ZipInput';
import Button from './Button';

class ZipForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', showResults: false, submittedval: '',};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      let zip_input = this.state.value;
      if (postcodeValidator(zip_input, 'US')){
        alert('Valid zipcode, beep boop');
      }
      this.setState({showResults: true});
      this.setState({submittedval: this.state.value});
      
    }
    
    render() {
        
      return (


        <div class="container">
            <div class="px2 py2 sm-py5 sm-px6 mx-auto sm-mb5 border-box card" role="main">

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
            { this.state.showResults ? <Results item={this.state.submittedval}/> : null }
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
*/

import React from 'react';
import Results from './Results';
import { postcodeValidator} from 'postcode-validator';
import ZipInput from './ZipInput';
import Button from './Button';
import Error from './Error';
import axios from 'axios';

class ZipForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', showResults: false, submittedval: '', showError: false, items:[]};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      let zip_input = this.state.value;
      let values = this.state.value;
      if (postcodeValidator(zip_input, 'US')){
        //alert('Valid zipcode, beep boop');
        this.setState({showResults: true});
        this.setState({showError: false});
        this.setState({submittedval: this.state.value});
        this.fetchData(values);
        
        
      }
      else{
        //alert('Invalid zipcode, beep boop');
        this.setState({showResults: false});
        this.setState({showError: true});
        this.setState({submittedval: this.state.value});
      }
      
    }
    fetchData = async values => {
      const { title, tbody, userID } = values;
      const axios = require('axios');
      let config = {
        method: 'get',
        url: "https://jsonplaceholder.typicode.com/users"
      };
      axios(config)
       .then((response) => {
         console.log(JSON.stringify(response.data));
         this.setState({ items: JSON.parse(JSON.stringify(response.data)) })
         //this.setState({ api_response: response.data})
         //console.log(this.state.api_response)
         //console.log(response)
         /*
        var arr = [];
        for (var id in response.data) {
        arr.push(response.data[id]);
        console.log(arr);
        this.setState({api_response: arr});*/

         
       })
       .catch((error) => {
         console.log(error);
       });
       

    }
    
    /*
      const apiURL = "https://jsonplaceholder.typicode.com/users";
      const response = await axios.post(apiURL, body)
      console.log(JSON.stringify(response.data))
      alert(JSON.stringify(response.data))
      this.setState({ api_response: response.data })
      this.setState({submittedval: this.state.value});//results near
    }
    
    handleNameChange = name => {
      this.setState({ name })
    }
    <Results api_response={this.state.api_response} onNameChange={this.handleNameChange} />
    */

    
    render() {
        
      return (


        <div class="container">
            <div class="px2 py2 sm-py5 sm-px6 mx-auto sm-mb5 border-box card" role="main">

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
            { this.state.showResults ? <Results items={this.state.items} item={this.state.submittedval}/> : null }
            
            { this.state.showError ? <Error item={this.state.submittedval}/> : null }
          
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