import React from "react";
import PropTypes from "prop-types";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Box, Divider, Typography } from "@mui/material";
import { flexCenter } from "../innerStyles";
import createLabel from "../utils.js/createLabel";

const FlightIcon = ({ label }) => {
    return (
        <Box
            sx={{
                ...flexCenter,
                flexGrow: "1",
                flexDirection: "column",
            }}>
            <Typography component="p" variant="secondary">
                {createLabel(label)}
            </Typography>
            <Box
                sx={{
                    ...flexCenter,
                    width: "100%",
                    position: "relative",
                    top: "-4px",
                    pl: 2,
                }}>
                <Divider sx={{ width: "120px" }} />
                <AirplanemodeActiveIcon
                    sx={{ rotate: "90deg", mr: 2 }}
                    fontSize="small"
                    color="disabled"
                />
            </Box>
        </Box>
    );
};

FlightIcon.propTypes = {
    label: PropTypes.number,
};

export default FlightIcon;
