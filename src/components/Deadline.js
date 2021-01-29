import React from 'react';

class Deadline extends React.Component {

    render() {
        let numWeeks = 1;
        let now = new Date();
        now.setDate(now.getDate() + numWeeks * 7);
        const options = {year: 'numeric', month: 'long', day: 'numeric' };
        const deadline = now.toLocaleDateString('en-us', options);

        return (
            <div class="usa-alert usa-alert--info">
            <div class="usa-alert__body">
                <h3 class="usa-alert__heading">Your deadline to verify your identity in person is {deadline}</h3>
                <p class="usa-alert__text">The identity services center will not save your information after {deadline}. If you show up after the deadline, they will not be able to verify your
                    identity and you will need to restart the verification process.</p>
            </div>
        </div>

        );
    }
}
export default Deadline;