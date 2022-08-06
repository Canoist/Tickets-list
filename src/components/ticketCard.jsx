import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardContent, CardMedia } from "@mui/material";
import correctPrice from "../utils.js/correctPrice";

const tipes = {
    arrival_date: "12.05.18",
    arrival_time: "22:10",
    carrier: "TK",
    departure_date: "12.05.18",
    departure_time: "16:20",
    destination: "TLV",
    destination_name: "Тель-Авив",
    origin: "VVO",
    origin_name: "Владивосток",
    price: 12400,
    stops: 3,
};

const TicketCard = ({ ticket }) => {
    return (
        <Card sx={{ display: "flex", width: "420px" }}>
            <CardContent>
                <Card sx={{ p: 2 }}>
                    <CardMedia
                        component="img"
                        src="/Turkish_Airlines-Logo.png"
                        height="60px"
                    />
                    <Button sx={{ mt: 2 }} variant="contained" color="warning">
                        Купить за {correctPrice(`${ticket.price}`)}р.
                    </Button>
                </Card>
            </CardContent>
            <CardContent>{ticket.departure_time}</CardContent>
        </Card>
    );
};

TicketCard.propTypes = { ticket: PropTypes.object };

export default TicketCard;
