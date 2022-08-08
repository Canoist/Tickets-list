import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import TicketCard from "../ticketCard";

const TicketsList = ({ data, currency }) => {
    console.log(data);
    return (
        <Box
            sx={{
                maxHeight: 500,
                overflow: "auto",
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
