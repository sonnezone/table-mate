import React from "react";

const Contact = () => {
    return (
        <div className="wrapper">
            <form className="form">
                <div className="pageTitle title">Kontaktformular</div>
                <div className="secondaryTitle title">
                    Please fill this form to sign up.
                </div>
                <input type="text" className="name formEntry" placeholder="Name (Pflichtfeld)" />
                <input type="text" className="email formEntry" placeholder="E-Mail-Adresse (Pflichtfeld)" />
                <textarea className="message formEntry" placeholder="Ihre Nachricht"></textarea>
                <div style={{display: "flex", alignItems: 'center'}}>
                    <input
                        type="checkbox"
                        className="termsConditions"
                        id="terms"
                        value="Term"
                        style={{ marginRight: "20px" }}
                    />
                    <label htmlFor="terms" style={{ color: "#fff", maxWidth: '220px'}}>
                        Ich akzeptiere die{" "}
                        <span style={{ color: "#a29186" }}>Nutzungsbedingungen</span> &{" "}
                        <span style={{ color: "#a29186" }}>Datenschutzerklärung</span>.
                    </label>
                </div>
                <button className="submit formEntry">SENDEN</button>
            </form>
        </div>
    );
};

export default Contact;
