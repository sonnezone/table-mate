import React, {useEffect, useState} from 'react';
import {Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown} from "reactstrap";

const Admin = () => {

    const [totalReservations, setTotalReservations] = useState([]);

    const [selection, setSelection] = useState({
        table: {
            name: null,
            id: null
        },
        date: new Date(),
        time: null,
    });

    const getDate = _ => {
        const months = [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember"
        ];
        const date =
            months[selection.date.getMonth()] +
            " " +
            selection.date.getDate() +
            " " +
            selection.date.getFullYear();
        let time = selection.time.slice(0, -2);
        time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
        console.log(time);
        // const datetime = new Date(date + " " + time);
        return new Date(date + " " + time);
    };

    const [times] = useState([
        "9AM",
        "10AM",
        "11AM",
        "12PM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
        "5PM"
    ]);

    const getTimes = _ => {
        let newTimes = [];
        times.forEach(time => {
            newTimes.push(
                <DropdownItem
                    key={time}
                    className="booking-dropdown-item"
                    onClick={_ => {
                        let newSel = {
                            ...selection,
                            table: {
                                ...selection.table
                            },
                            time: time
                        };
                        setSelection(newSel);
                    }}
                >
                    {time}
                </DropdownItem>
            );
        });
        return newTimes;
    };


    useEffect(() => {
        if (selection.time && selection.date) {
            console.log("test!!!");
            (async _ => {
                let datetime = getDate();
                console.log(datetime)
                let res = await fetch('http://localhost:3005/availability', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        date: datetime,
                    }),
                });
                res = await res.json();
                console.log(res);
                let reservations = res.tables.filter(
                    table =>
                        table.isAvailable === false &&
                        table.reservation
                );
                console.log(reservations);
                setTotalReservations(reservations);
            })();
        }
    }, [selection.time, selection.date, selection.size, selection.location]);


    const getReservations = _ => {
        console.log("Getting reservations");
        let reservations = [];
        totalReservations.forEach(reservation => {
            reservations.push(
                <tr>
                    <td>{reservation.name}</td>
                    <td>{reservation.capacity}</td>
                    <td>{reservation.location}</td>
                    <td>{reservation.reservation.name}</td>
                    <td>{reservation.reservation.phone}</td>
                    <td>{reservation.reservation.email}</td>
                </tr>
            );
        });
        return reservations;
    }


    return (
        <Container>
            <Row>
                <Col xs="6">
                    <input
                        type="date"
                        required="required"
                        className="booking-dropdown btn btn-none"
                        value={selection.date.toISOString().split("T")[0]}
                        onChange={e => {
                            if (!isNaN(new Date(new Date(e.target.value)))) {
                                let newSel = {
                                    ...selection,
                                    table: {
                                        ...selection.table
                                    },
                                    date: new Date(e.target.value)
                                };
                                setSelection(newSel);
                            } else {
                                console.log("Invalid date");
                                let newSel = {
                                    ...selection,
                                    table: {
                                        ...selection.table
                                    },
                                    date: new Date()
                                };
                                setSelection(newSel);
                            }
                        }}
                    ></input>
                </Col>
                <Col xs="6">
                    <UncontrolledDropdown>
                        <DropdownToggle color="none" caret className="booking-dropdown">
                            {selection.time === null ? "Uhrzeit" : selection.time}
                        </DropdownToggle>
                        <DropdownMenu right className="booking-dropdown-menu">
                            {getTimes()}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <table border="1">
                        <thead>
                        <tr>
                            <th>Table Name</th>
                            <th>Capacity</th>
                            <th>Location</th>
                            <th>Reservation Name</th>
                            <th>Reservation Phone</th>
                            <th>Reservation Email</th>
                        </tr>
                        </thead>
                        <tbody>
                            {getReservations()}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;