import React from 'react';

class EmailPage extends React.Component {
    constructor(props) {
        super(props);
        this.backToDetailsPage = this.backToDetailsPage.bind(this);
    }

    backToDetailsPage() {
        this.props.history.goBack();
    }

    render() {

        return (

            <div class="container">
                <div class="px2 py2 sm-py5 sm-px6 mx-auto sm-mb5 border-box card" role="main">

                    <div class="usa-alert usa-alert--success">
                        <div class="usa-alert__body">
                            <p class="mt0 mb0">Email sent</p>
                        </div>
                    </div>
                    <br />

                    <h1 class="h3 my0">Please check your email</h1>

                    <p class='mt-tiny mb0'>
                        We have sent the details to verify your identity in person to your email. It could take up to 10 minutes to
                        show in your inbox.</p>

                    <h4>Didn't receive the email?</h4>
                    <ol class="usa-list">
                        <li class="pb1">Is <b>jane@somedomain.com</b> your correct email?</li>
                        <li class="pb1">Check your spam folder.</li>
                        <li class="pb1">If you still didn't receive the email, <a href="url">send another email</a>.</li>
                    </ol>

                    <br />
                    <div>
                        <input type="submit" name="commit" onClick={this.backToDetailsPage} value="Back to details page" class="btn btn-primary btn-wide"
                        ></input></div>
                </div>
            </div>

        );
    }
}
export default EmailPage;