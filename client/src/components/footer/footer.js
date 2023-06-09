import React from "react";
import { Row, Col } from "reactstrap";
import SimpleReactFooter from "simple-react-footer/lib/SimpleReactFooter";

export const Footer = () => {
    const description = "Entdecken Sie unser innovatives Reservierungstool speziell für Restaurantbesitzer! Mit Fokus auf Einfachheit und Effizienz, bietet unser Tool eine optimale Lösung für die Online-Tischreservierung. Es ermöglicht nicht nur eine einfache Verwaltung von Reservierungen, sondern unterstützt auch bei der Maximierung der Tischauslastung. Egal ob Sie ein gemütliches Café oder ein großes Restaurant führen, unser Tool passt sich Ihren Bedürfnissen an. Kontaktieren Sie uns über das Formular, um mehr zu erfahren und wie wir Ihnen helfen können, Ihr Geschäft zu optimieren.";
    const title = "Table Mate";
    const columns = [
        {
            title: "Ressourcen",
            resources: [
                {
                    name: "Über uns",
                    link: "/about"
                },
                {
                    name: "Karriere",
                    link: "/careers"
                },
                {
                    name: "Kontakt",
                    link: "/contact"
                },
                {
                    name: "Admin",
                    link: "/admin"
                }
            ]
        },
        {
            title: "Rechtliches",
            resources: [
                {
                    name: "Datenschutz",
                    link: "/privacy"
                },
                {
                    name: "Nutzungsbedingungen",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Besuchen",
            resources: [
                {
                    name: "Standorte",
                    link: "/locations"
                },
                {
                    name: "Kultur",
                    link: "/culture"
                }
            ]
        }
    ];

    return (
        <SimpleReactFooter
            description={description}
            title={title}
            columns={columns}
            linkedin="table-mate"
            facebook="table-mate"
            twitter="table-mate"
            instagram="table-mate"
            youtube="table-mate"
            pinterest="table-mate"
            copyright="black"
            iconColor="black"
            backgroundColor="#bcbcb9"
            fontColor="black"
            copyrightColor="darkgrey"
        />
    );
}