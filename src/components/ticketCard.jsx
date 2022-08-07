import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import correctPrice from "../utils.js/correctPrice";
import { flexCenter } from "../innerStyles";
import FlightIcon from "./flightIcon";
import translateDate from "../utils.js/translateDate";
import translateTime from "../utils.js/translateTime";

// arrival_date: "12.05.18",
// arrival_time: "22:10",
// carrier: "TK",
// departure_date: "12.05.18",
// departure_time: "16:20",
// destination: "TLV",
// destination_name: "Тель-Авив",
// origin: "VVO",
// origin_name: "Владивосток",
// price: 12400,
// stops: 3,

const TicketCard = ({ ticket }) => {
    return (
        <Card sx={{ display: "flex", width: "550px", mb: 2, mx: 2 }}>
            <CardContent sx={{ p: 0 }}>
                <Card sx={{ p: 2, borderRadius: 0 }}>
                    <Box sx={{ ...flexCenter }}>
                        <img
                            alt="Turkish Airlines"
                            src="/Turkish_Airlines-Logo.png"
                            height="40px"
                        />
                    </Box>
                    <Button
                        sx={{
                            mt: 2,
                            width: 140,
                            textTransform: "none",
                            lineHeight: 1.5,
                        }}
                        variant="contained"
                        color="warning"
                        // className="buttonHover"
                    >
                        Купить
                        <br /> за {correctPrice(`${ticket.price}`)}₽
                    </Button>
                </Card>
            </CardContent>
            <CardContent sx={{ flexGrow: "1" }}>
                <Box sx={{ ...flexCenter, justifyContent: "space-between" }}>
                    <Typography variant="h4">
                        {translateTime(ticket.departure_time)}
                    </Typography>
                    <FlightIcon label={ticket.stops} />
                    <Typography variant="h4">
                        {translateTime(ticket.arrival_time)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <Typography variant="body2">
                        {ticket.origin}, {ticket.origin_name}
                        <Typography display="block" variant="secondary">
                            {translateDate(ticket.departure_date)}
                        </Typography>
                    </Typography>
                    <Typography variant="body2">
                        {ticket.destination_name}, {ticket.destination}
                        <Typography
                            display="block"
                            align="right"
                            variant="secondary">
                            {translateDate(ticket.arrival_date)}
                        </Typography>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

TicketCard.propTypes = { ticket: PropTypes.object };

export default TicketCard;
