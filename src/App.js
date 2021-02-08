import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import EmailPage from './components/EmailPage';
import ZipForm from './components/ZipForm'
import ScrollToTop from './components/ScrollToTop' //place the <ScrollToTop/> component below BrowserRouter, this seems to make the UI screen transations more abrupt


class App extends Component {
render() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div>
                <Switch>
                    <Route exact path="/"> <ZipForm/>
                    </Route>
                    <Route path="/details" component={DetailsPage}>
                    </Route>
                    <Route path="/email_confirmation" component={EmailPage}>
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>
    );
}
}

export default App;
