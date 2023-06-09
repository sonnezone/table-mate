import React, { useState } from "react";

import Main from "./components/main/main";
import Book from "./components/booking/book";
import ThankYou from "./components/booking/thankYou";
import Navbar from "./components/header/navbar";
import {Container} from "reactstrap";

export default _ => {
  const [page, setPage] = useState(0);

  return (
      <Container>
          <Navbar setPage={setPage} />
          {page === 0 ? <Main setPage={setPage} /> : null}
          {page === 1 ? <Book setPage={setPage} /> : null}
          {page === 2 ? <ThankYou /> : null}
      </Container>
  );
};
