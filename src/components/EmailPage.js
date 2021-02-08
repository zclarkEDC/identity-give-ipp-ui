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
                <div>
                    <div class="usa-alert usa-alert--success">
                        <div class="usa-alert__body">Email sent</div></div>
                    <br />
                    <h3>Please check your email</h3>
                    <p>We have sent the details to verify your identity in person to your email. It could take up to 10 minutes to show in your inbox.</p>
                    <h4>Didn't receive the email?</h4>
                    <ol class="usa-list">
                        <li>Is <b>jane@somedomain.com</b> your correct email?</li>
                        <li>Check your spam folder.</li>
                        <li>If you still didn't receive the email, <a href="url">send another email</a>.</li>
                    </ol><br />
                    <div><button type="submit" name="commit" onClick={this.backToDetailsPage} value="Back to details page">Back to details page</button></div></div></div>
        );
    }
}
export default EmailPage;