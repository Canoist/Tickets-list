import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import TicketCard from "../ticketCard";

const TicketsList = ({ data }) => {
    const { tickets } = data;
    console.log(tickets);
    return (
        <Box sx={{ maxHeight: 500, overflow: "auto", maxWidth: 500 }}>
            {tickets.map((item, index) => (
                <TicketCard key={index} ticket={item} />
            ))}
        </Box>
    );
};

TicketsList.propTypes = {
    data: PropTypes.object,
};

export default TicketsList;
