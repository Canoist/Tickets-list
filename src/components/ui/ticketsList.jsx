import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import TicketCard from "../ticketCard";

const TicketsList = ({ data, currency }) => {
    const { tickets } = data;
    console.log(tickets);
    return (
        <Box
            sx={{
                maxHeight: 500,
                overflow: "auto",
            }}>
            {tickets.map((item, index) => (
                <TicketCard key={index} ticket={item} currency={currency} />
            ))}
        </Box>
    );
};

TicketsList.propTypes = {
    data: PropTypes.object,
    currency: PropTypes.string,
};

export default TicketsList;
