import React from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';
import Deadline from './Deadline';


class DetailsPage extends React.Component {
    constructor(props){
        super(props);
        this.backToResultsPage = this.backToResultsPage.bind(this); 
     }
     
     backToResultsPage(){
         this.props.history.goBack();
     }


    render() {
        
        return (

            
            <div class="container">
            <div class="px2 py2 sm-py5 sm-px6 mx-auto sm-mb5 border-box card" role="main">

                <h1 class="h3 my0">
                    Details to verify your identity in person
                </h1>
                <Deadline />
                <br/>
                <p class='mt-tiny mb0'>
                    You will need to stop by an identity services center to finalize your verification process. No
                    appointment is required.
                </p>


                <h3 id="section-heading-h3">What you'll need to bring:</h3>

                <ul class="list-reset">
                    <li>
                        <div class="inline-block mr2 mt1  circle circle-number bg-blue white">
                            1
                        </div>
                        <label class="h1 inline-block bold" for="nickname">
                            State Issued Photo ID
                        </label>
                        <div class="ml4 mb1">
                            A driver's license or other compliant state photo identity card issued by Department of
                            Motor Vehicles (or equivalent).
                        </div>


                    </li>
                    <li>
                        <div class="inline-block mr2 mt1  circle circle-number bg-blue white">
                            2
                        </div>
                        <label class="h1 inline-block bold" for="nickname">
                            Email Address
                        </label>
                        <div class="ml4 mb1">
                            An email address used to manage your <a href="url">login.gov account information.</a>
                        </div>


                    </li>

                </ul>
                <h3>Branch Information</h3>
                <Details {...this.props}/>
                

                <h4>Branch Hours of Operation</h4>
                <ul class="list-reset">
                    <li class="pt0 pb1">

                        <div class="mb1">
                            <div class="grid-row">
                                <div class="grid-col-5">Monday</div>
                                <div class="grid-col-7">8:30 am - 5:00 pm</div>
                            </div>
                        </div>
                        <hr>
                        </hr>
                    </li>
                    <li class="pt0 pb1">
                        <div class="mb1">
                            <div class="grid-row">
                                <div class="grid-col-5">Tuesday</div>
                                <div class="grid-col-7">8:30 am - 5:00 pm</div>
                            </div>
                        </div>
                        <hr>
                        </hr>
                    </li>
                    <li class="pt0 pb1">
                        <div class="mb1">
                            <div class="grid-row">
                                <div class="grid-col-5">Wednesday</div>
                                <div class="grid-col-7">8:30 am - 5:00 pm</div>
                            </div>
                        </div>
                        <hr>
                        </hr>
                    </li>
                    <li class="pt0 pb1">
                        <div class="mb1">
                            <div class="grid-row">
                                <div class="grid-col-5">Thursday</div>
                                <div class="grid-col-7">8:30 am - 5:00 pm</div>
                            </div>
                        </div>
                        <hr>
                        </hr>
                    </li>
                    <li class="pt0 pb1">
                        <div class="mb1">
                            <div class="grid-row">
                                <div class="grid-col-5">Friday</div>
                                <div class="grid-col-7">8:30 am - 5:00 pm</div>
                            </div>
                        </div>
                        <hr>
                        </hr>
                    </li>
                    <li class="pt0 pb1">
                        <div class="mb1">
                            <div class="grid-row">
                                <div class="grid-col-5">Saturday</div>
                                <div class="grid-col-7">9:00 am - 12:00 pm</div>
                            </div>
                        </div>
                        <hr>
                        </hr>
                    </li>
                    <li class="pt0 pb1">
                        <div class="mb1">
                            <div class="grid-row">
                                <div class="grid-col-5">Sunday</div>
                                <div class="grid-col-7">Closed</div>
                            </div>
                        </div>
                        <hr>
                        </hr>
                    </li>
                </ul>
                <form action="4- Please check your email.html">
                    <input type="submit" name="print" value="Print this Page"
                        class="px2 py2 usa-button usa-button--outline btn-wide"
                        data-disable-with="Print this Page"></input><br/><br/>
                    <Link to="/email_confirmation"><input type="submit" name="email" value="Email this Page"
                        class="px2 py2 usa-button usa-button--outline btn-wide"
                        data-disable-with="Email this Page"></input></Link>
                </form>


            </div>
        </div>
           
        );
    }
}
export default DetailsPage;