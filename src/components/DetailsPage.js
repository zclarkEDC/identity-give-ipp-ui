import React from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';
import Deadline from './Deadline';


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
            <div className="container">
                <div id="detailspage" role="main">

                    <div id="printer" className="grid-row"><div className="grid-col-9"></div>
                        <div className="grid-col-3"><img class="inline-block" src="assets/img/print.svg" width="17" height="17" /> <p class="inline-block"> Print Page</p></div></div>
                    <h1>
                        Details to verify your identity in person
                    </h1>
                    <Deadline />
                    <br />
                    <p>
                        You will need to stop by an identity services center to finalize your verification process. No
                        appointment is required.
                </p>
                    <h3>What you'll need to bring:</h3>
                    <ul className="list-reset">
                        <li>
                            <div>
                                1
                        </div>
                            <label>
                                State Issued Photo ID
                        </label>
                            <div>
                                A driver's license or other compliant state photo identity card issued by Department of
                                Motor Vehicles (or equivalent).
                        </div>
                        </li>
                        <li>
                            <div>
                                2
                        </div>
                            <label>
                                Email Address
                        </label>
                            <div>
                                An email address used to confirm your information.
                        </div>
                        </li>
                    </ul>
                    <h3>Branch Information</h3>
                    <Details {...this.props} />


                    <h4>Branch Hours of Operation</h4>
                    <ul className="list-reset">
                        <li>

                            <div>
                                <div className="grid-row">
                                    <div className="grid-col-5">Monday</div>
                                    <div className="grid-col-7">8:30 am - 5:00 pm</div>
                                </div>
                            </div>
                            <hr>
                            </hr>
                        </li>
                        <li>
                            <div>
                                <div className="grid-row">
                                    <div className="grid-col-5">Tuesday</div>
                                    <div className="grid-col-7">8:30 am - 5:00 pm</div>
                                </div>
                            </div>
                            <hr>
                            </hr>
                        </li>
                        <li>
                            <div>
                                <div className="grid-row">
                                    <div className="grid-col-5">Wednesday</div>
                                    <div className="grid-col-7">8:30 am - 5:00 pm</div>
                                </div>
                            </div>
                            <hr>
                            </hr>
                        </li>
                        <li>
                            <div>
                                <div className="grid-row">
                                    <div className="grid-col-5">Thursday</div>
                                    <div className="grid-col-7">8:30 am - 5:00 pm</div>
                                </div>
                            </div>
                            <hr>
                            </hr>
                        </li>
                        <li>
                            <div className="mb1">
                                <div className="grid-row">
                                    <div className="grid-col-5">Friday</div>
                                    <div className="grid-col-7">8:30 am - 5:00 pm</div>
                                </div>
                            </div>
                            <hr>
                            </hr>
                        </li>
                        <li>
                            <div>
                                <div className="grid-row">
                                    <div className="grid-col-5">Saturday</div>
                                    <div className="grid-col-7">9:00 am - 12:00 pm</div>
                                </div>
                            </div>
                            <hr>
                            </hr>
                        </li>
                        <li>
                            <div>
                                <div className="grid-row">
                                    <div className="grid-col-5">Sunday</div>
                                    <div className="grid-col-7">Closed</div>
                                </div>
                            </div>
                            <hr>
                            </hr>
                        </li>
                    </ul>
                    <form action="4- Please check your email.html">
                        <input type="submit" name="print" value="Print this Page"
                            data-disable-with="Print this Page"></input><br /><br />
                        <Link to="/email_confirmation"><input type="submit" name="email" value="Email this Page"
                            className="usa-button usa-button--outline btn-wide"
                            data-disable-with="Email this Page"></input></Link>
                    </form>

                </div>
            </div>

        );
    }
}
export default DetailsPage;