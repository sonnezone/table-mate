// import React, { useState } from "react";
//
// import Main from "./components/main/main";
// import Book from "./components/booking/book";
// import ThankYou from "./components/booking/thankYou";
// import Navbar from "./components/header/navbar";
// import {Container} from "reactstrap";
// import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
//
// export default _ => {
//   const [page, setPage] = useState(0);
//
//   return (
//       <>
//       <Switch>
//               <Route path="/" component={<Container>
//                   <Navbar setPage={setPage} />
//                   {page === 0 ? <Main setPage={setPage} /> : null}
//                   {page === 1 ? <Book setPage={setPage} /> : null}
//                   {page === 2 ? <ThankYou /> : null}
//               </Container>}/>
//       </Switch>
//           </>
//   );
// };

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

