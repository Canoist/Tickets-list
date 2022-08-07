import { Icon } from "@mui/material";
import React from "react";
import { flexCenter } from "../innerStyles";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";

const MainIcon = () => {
    return (
        <Icon
            sx={{
                backgroundColor: "#42a5f5",
                borderRadius: "50%",
                p: "15px",
                boxShadow: "0 0 16px grey",
                ...flexCenter,
                mb: 5,
            }}>
            <FlightRoundedIcon
                fontSize="large"
                sx={{
                    color: "white",
                    rotate: "60deg",
                }}
            />
        </Icon>
    );
};
export default MainIcon;
