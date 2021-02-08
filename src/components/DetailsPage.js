import React from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';
import Deadline from './Deadline';
import HoursGrid from './HoursGrid';


class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.backToResultsPage = this.backToResultsPage.bind(this);
    }
    backToResultsPage() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div class="container">
                <div id="detailspage" class="px2 py2 sm-py5 sm-px6 mx-auto sm-mb5 border-box card" role="main">
                    <div id="printer" class="grid-row">
                        <div class="grid-col-9"></div>
                        <div class="grid-col-3"><img class="inline-block" src="assets/img/print.svg" width="17" height="17" />
                            <p class="inline-block">Print Page</p></div></div><h1 class="h3 my0">Details to verify your identity in person</h1><Deadline /><br /><p class='mt-tiny mb0'>You will need to stop by an identity services center to finalize your verification process. Noappointment is required.
                    </p><h3 id="section-heading-h3">What you'll need to bring:</h3><ul class="list-reset"><li><div class="inline-block mr2 mt1  circle circle-number bg-blue white">1</div><label class="h1 inline-block bold" for="nickname"> State Issued Photo ID</label><div class="ml4 mb1">A driver's license or other compliant state photo identity card issued by Department of Motor Vehicles (or equivalent).</div></li><li><div class="inline-block mr2 mt1  circle circle-number bg-blue white">2</div><label class="h1 inline-block bold" for="nickname">Email Address
                            </label><div class="ml4 mb1">An email address used to confirm your information.</div></li></ul><h3>Branch Information</h3><Details {...this.props} /><h4>Branch Hours of Operation</h4><HoursGrid/><form action="4- Please check your email.html"><input type="submit" name="print" value="Print this Page" class="px2 py2 usa-button usa-button--outline btn-wide" data-disable-with="Print this Page"></input><br /><br /><Link to="/email_confirmation"><input type="submit" name="email" value="Email this Page" class="px2 py2 usa-button usa-button--outline btn-wide" data-disable-with="Email this Page"></input>
                        </Link></form></div></div>
        );
    }
}
export default DetailsPage;