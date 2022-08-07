import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import translateDate from "../utils.js/translateDate";

const DestArrInfo = ({ ticket }) => {
    return (
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
                <Typography display="block" align="right" variant="secondary">
                    {translateDate(ticket.arrival_date)}
                </Typography>
            </Typography>
        </Box>
    );
};

DestArrInfo.propTypes = {
    ticket: PropTypes.object,
};

export default DestArrInfo;
