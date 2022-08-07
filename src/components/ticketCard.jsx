import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { flexCenter } from "../innerStyles";
import FlightIcon from "./flightIcon";
import translateTime from "../utils.js/translateTime";
import calculatePrice from "../utils.js/calculatePrice";
import DestArrInfo from "./destArrInfo";
import PriceButtonLogo from "./priceButtonLogo";

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

const TicketCard = ({ ticket, currency }) => {
    const price = calculatePrice(ticket.price, currency);

    return (
        <Card sx={{ display: "flex", width: "550px", mb: 2, mx: 2 }}>
            <CardContent sx={{ p: 0 }}>
                <PriceButtonLogo currency={currency} price={price} />
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
                <DestArrInfo ticket={ticket} />
            </CardContent>
        </Card>
    );
};

TicketCard.propTypes = {
    ticket: PropTypes.object,
    currency: PropTypes.string,
};

export default TicketCard;
