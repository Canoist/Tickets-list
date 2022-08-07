import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import correctPrice from "../utils.js/correctPrice";
import { flexCenter } from "../innerStyles";

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
        <Card sx={{ display: "flex", width: "520px", mb: 2 }}>
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
                        sx={{ mt: 2, width: 140, textTransform: "none" }}
                        variant="contained"
                        color="warning">
                        Купить
                        <br /> за {correctPrice(`${ticket.price}`)}₽
                    </Button>
                </Card>
            </CardContent>
            <CardContent sx={{ flexGrow: "1", bgcolor: "gold" }}>
                <Box sx={{ ...flexCenter, justifyContent: "space-between" }}>
                    <Typography variant="h4">
                        {ticket.departure_time}
                    </Typography>
                    <Typography variant="h4">
                        {ticket.departure_time}
                    </Typography>
                </Box>
                <Box></Box>
            </CardContent>
        </Card>
    );
};

TicketCard.propTypes = { ticket: PropTypes.object };

export default TicketCard;
