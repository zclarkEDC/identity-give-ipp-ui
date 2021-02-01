import React from 'react';
import axios from 'axios';
import ZipInput from './ZipInput';
import Button from './Button';
import validator from 'email-validator';
import Error from './Error';

class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', auth: {}, submittedemail: '', showConfirmation: false, showForm: true, showError: false };
        this.backToDetailsPage = this.backToDetailsPage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    backToDetailsPage() {
        this.props.history.goBack();
    }
    handleChange(event) {
        this.setState({ email: event.target.value });
      }
    handleSubmit(event){
        event.preventDefault();
        this.setState({ submittedemail: this.state.email});
        ///alert('hi this is the input', this.state.email);
        console.log('this is the input',this.state.email);
        if (validator.validate(this.state.email)){
            alert('good')
            console.log('good email',this.state.email);
            this.setState({ showError: false });
            this.setState({ showConfirmation: true });
            this.setState({ showForm: false });
        }
        else{
            alert('bad', this.state.email)
            console.log('bad email',this.state.email);
            this.setState({ showError: true });
            this.setState({ showConfirmation: false });
            this.setState({ showForm: true });
        }
    }
    componentDidMount() {
        var access_token = JSON.stringify(this.props.location.state.auth);
        var bearer = 'bearer '
        let fauth = bearer.concat(access_token);
        //console.log(fauth)
        var zurl = "https://jsonplaceholder.typicode.com/users";
        //var zipsearch = url.concat(values)
        //alert(fauth);

        let config = {
            method: 'get',
            url: zurl,
            /*headers: {
              'Authorization': auth
            }*/
        };
        //console.log(config);
        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                this.setState({ auth: JSON.parse(JSON.stringify(response.data)) })
                //this.setState({ items: JSON.parse(JSON.stringify(response.data)) })
            })
            .catch((error) => {
                console.log(error);
            });
       
    }

    render() {

        return (

            <div class="container">
                <div class="px2 py2 sm-py5 sm-px6 mx-auto sm-mb5 border-box card" role="main">
                {this.state.showError ? <Error item={this.state.submittedemail} message='Invalid email address' /> : null}
                {this.state.showForm ? <div>
                <h1 class="h3 my0" >
            Email the details to verify your identity in person
                </h1>
                    <div class="mb4">
                        <form class="simple_form mt3 sm-mt3 new_user" onSubmit={this.handleSubmit} accept-charset="UTF-8">

                            <div class="mb3 zip required zip">
                                <label class="bold email required" for="email"><abbr
                                    title="required" class="red display-none">*</abbr> Email address</label>

                                <ZipInput
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required="required"
                                    className="block col-12 field string zip required"
                                    aria-invalid="false"
                                    aria-required="true"
                                    id="email"
                                />
                            </div>
                            <Button
                                type="submit"
                                value="Submit"
                                label="Send"
                                className="btn btn-primary btn-wide"

                            />


                        </form>
                        <br></br>
                        <div class="mt2 pt1 border-top">
            <a href="https://secure.login.gov/">Cancel</a></div>
       

                    </div>  </div>: null}
                    {this.state.showConfirmation ? <div>
                    <div class="usa-alert usa-alert--success">
                        <div class="usa-alert__body">
                            <p class="mt0 mb0">Email sent</p>
                        </div>
                    </div>
                    <br></br>
                    <h1 class="h3 my0">Please check your email</h1>

                    <p class='mt-tiny mb0'>
                        We have sent the details to verify your identity in person to your email. It could take up to 10 minutes to
                        show in your inbox.</p>

                    <h4>Didn't receive the email?</h4>
                    <ol class="usa-list">
                        <li class="pb1">Is <b>{this.state.email}</b> your correct email?</li>
                        <li class="pb1">Check your spam folder.</li>
                        <li class="pb1">If you still didn't receive the email, <a href="url">send another email</a>.</li>
                    </ol>
                    <br></br>

                    
                    <div>
                        <input type="submit" name="commit" onClick={this.backToDetailsPage} value="Back to details page" class="btn btn-primary btn-wide"
                        ></input></div> </div> : null}
                </div> 
            </div>

        );
    }
}
export default EmailPage;
//{this.state.showResults ? <Results items={this.state.items} auth={this.state.authtoken} item={this.state.submittedval} itemzip={this.state.zipresponse} /> : null}