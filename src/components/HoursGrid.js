import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class HoursGrid extends Component {

    render() {
        var daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return (
            <ul class="list-reset">
            {daysInWeek.map((day) =>
                <li key= {day}class="pt0 pb1">
                <div class="mb1">
                    <div class="grid-row">
                        <div class="grid-col-5">{day}</div>
                        <div class="grid-col-7">8:30 am - 5:00 pm</div>
                    </div>
                </div>
                <hr></hr>
            </li>)}
</ul>);
    }
}

export default HoursGrid;