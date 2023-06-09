import React from "react";
import { Row, Col, Button } from "reactstrap";
import Faq from 'react-faq-component';
import Contact from "./contact";
import {Footer} from "../footer/footer";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "1. Was ist unser Restaurant Reservierungstool?",
            content: `Unser Restaurant Reservierungstool ist eine benutzerfreundliche Online-Softwarelösung, die entwickelt wurde, um Restaurants bei der Verwaltung und Optimierung ihrer Reservierungen und Sitzplatzbelegungen zu unterstützen. Es hilft dabei, Reservierungen zu organisieren, Kundeninformationen zu speichern und Tischverfügbarkeiten zu verwalten, um einen effizienten Betrieb zu gewährleisten.`,
        },
        {
            title: "2. Wie funktioniert das Restaurant Reservierungstool?",
            content:
                "Unser Reservierungstool ist einfach zu bedienen. Nachdem Sie das Tool auf Ihrer Website installiert haben, können Ihre Gäste einfach auf den Reservierungslink klicken, den gewünschten Termin und die Uhrzeit auswählen, ihre Kontaktdetails eingeben und ihre Reservierung bestätigen. Sie erhalten eine Bestätigung per E-Mail oder SMS. Auf der Verwaltungsseite können Sie Reservierungen ansehen, bearbeiten und verwalten.",
        },
        {
            title: "3. Ist es kompliziert, das Reservierungstool in meine Website zu integrieren?",
            content: `Nein, es ist nicht kompliziert. Unser Reservierungstool wurde mit Blick auf die Benutzerfreundlichkeit entwickelt und kann problemlos in jede Website integriert werden. Wir bieten auch technische Unterstützung, um sicherzustellen, dass der Prozess reibungslos und einfach für Sie ist.`,
        },
        {
            title: "4. Ist das Reservierungstool sicher und datenschutzfreundlich?",
            content: `Ja, das Reservierungstool ist sicher und datenschutzfreundlich. Wir nehmen den Datenschutz sehr ernst und entsprechen allen geltenden Datenschutzgesetzen. Alle Daten werden sicher übertragen und gespeichert, und wir verkaufen oder teilen Ihre Daten nicht mit Dritten.`,
        },
        {
            title: "5. Wie sieht es mit dem Kundenservice aus?",
            content: `Unser Kundenservice-Team ist rund um die Uhr verfügbar, um Ihnen bei all Ihren Fragen und Anliegen zu helfen. Sie können uns per E-Mail, Telefon oder Live-Chat kontaktieren. Wir sind stets bemüht, Ihnen so schnell und effizient wie möglich zu helfen.`,
        },
    ],
};

const styles = {
    bgColor: '#bcbcb9',
    titleTextSize: '50px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    // titleTextColor: "black",
    // rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "v",
    tabFocus: true
};

export default props => {
  return (
  <div>
      <Row noGutters className="text-center align-items-center">
        <Col xs="5">
            <h1 className="main-text">Einfache Verwaltung von Reservierungen</h1>
            <h2 className="sub-text">Table Mate: Reservierungen leicht gemacht!</h2>
            <h3 className="sub-text">Erleben Sie Table Mate, eine intuitiv gestaltete und zeiteffiziente digitale Lösung, mit der Sie täglich Ihre Restaurantbuchungen und Gästebeziehungen optimal organisieren können.
            </h3>

        </Col>
        <Col xs="7">
            <img
                src={require("../../images/table.png")}
                alt="table"
                className="big-img"
            />
        </Col>
      </Row>
      <Row noGutters id="demo" className="text-center align-items-center main-cta bg-full">
        <Col xs="12">
            <div className="separator">
                <h1 className="demo">TABLE MATE</h1>
                <p className="demoParagraph">Steigern Sie Effizienz und Kundenzufriedenheit mit unserem innovativen Restaurant-Reservierungstool - klicken Sie auf "Demo", um es in Aktion zu sehen!</p>
            </div>
        </Col>
        <Col xs="12">
          <Button
              color="none"
              className="book-table-btn"
              onClick={_ => {
                  props.setPage(1);
              }}
          >
              DEMO
          </Button>
        </Col>
      </Row>
      {/*<Row>*/}
      {/*      <Col xs="12" className="text-center">*/}
      {/*          <h1 className="main-text">Unsere Features</h1>*/}
      {/*      </Col>*/}
      {/*</Row>*/}
        <Row id="faq" className="faq">
            <Col xs="12">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </Col>
        </Row>
      <Row id="contact" className="main-cta bg-full">
          <Col xs="6">
              <h1 className="main-text contact">Kontaktieren Sie Uns für Ihre maßgeschneiderte Lösung!</h1>

              <h3 style={{minHeight: "400px"}} className="sub-text contact">Lieber Restaurantbesitzer, haben Sie Fragen zu unserer Reservierungssoftware? Füllen Sie das Kontaktformular nebenan aus und teilen Sie uns Ihre Kontaktdaten mit. Unser Team wird sich schnellstmöglich mit Ihnen in Verbindung setzen, um Ihre Anforderungen zu besprechen und maßgeschneiderte Lösungen anzubieten. Zusammen bringen wir Ihr Reservierungsmanagement voran!
              </h3>
          </Col>
          <Col xs="6">
              <Contact/>
          </Col>
      </Row>
      <Row>
          <Col xs="12">
                <Footer/>
          </Col>
      </Row>
  </div>

  );
};
