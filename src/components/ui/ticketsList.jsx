import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import TicketCard from "../ticketCard";
import "./ticketsList.css";

const TicketsList = ({ data, currency }) => {
    return (
        <Box
            className="scroll-hidden"
            sx={{
                height: 500,
            }}>
            {data.map((item, index) => (
                <TicketCard key={index} ticket={item} currency={currency} />
            ))}
        </Box>
    );
};

TicketsList.propTypes = {
    data: PropTypes.array,
    currency: PropTypes.string,
};

export default TicketsList;
