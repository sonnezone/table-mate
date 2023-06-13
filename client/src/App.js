import React from "react";
import Main from "./components/main/main";
import Book from "./components/booking/book";
import ThankYou from "./components/booking/thankYou";
import Navbar from "./components/header/navbar";
import {Container} from "reactstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Admin from "./components/admin/admin";

export default () => {
    return (
        <Router>
            <Container>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/book" component={Book} />
                    <Route path="/thankyou" component={ThankYou} />
                    <Route path="/admin" component={Admin}/>
                </Switch>
            </Container>
        </Router>
    );
};
