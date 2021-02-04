import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import EmailPage from './components/EmailPage';
import ScrollToTop from './components/ScrollToTop'
import FindServiceCenter from "./views/FindServiceCenter";
import EmailSentConfirmation from "./views/EmailSentConfirmation"; //place the <ScrollToTop/> component below BrowserRouter, this seems to make the UI screen transations more abrupt

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/" render={props => <FindServiceCenter {...props} />} />
                <Route exact path="/details" render={props => <DetailsPage {...props} />} />
                <Route exact path="/email_confirmation" render={props => <EmailSentConfirmation {...props} />} />
                <Route path="/email_confirmation" component={EmailPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
