import React from "react";
import PropTypes from "prop-types";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Box, Divider, Typography } from "@mui/material";
import { flexCenter } from "../innerStyles";

const FlightIcon = ({ label }) => {
    return (
        <Box
            sx={{
                ...flexCenter,
                flexGrow: "1",
                flexDirection: "column",
            }}>
            <Typography component="p" variant="secondary">
                {label}
            </Typography>
            <Box
                sx={{
                    ...flexCenter,
                    width: "100%",
                    position: "relative",
                    top: "-4px",
                    pl: 2,
                }}>
                <Divider sx={{ width: "70%" }} />
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
    label: PropTypes.string,
};

export default FlightIcon;
