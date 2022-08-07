import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Card } from "@mui/material";
import { flexCenter } from "../innerStyles";
import correctPrice from "../utils.js/correctPrice";

const PriceButtonLogo = ({ price, currency }) => {
    return (
        <Card sx={{ p: 2, borderRadius: 0 }}>
            <Box sx={{ ...flexCenter }}>
                <img
                    alt="Turkish Airlines"
                    src="/Turkish_Airlines-Logo.png"
                    height="40px"
                />
            </Box>
            <Button
                sx={{
                    mt: 2,
                    width: 140,
                    textTransform: "none",
                    lineHeight: 1.5,
                }}
                variant="contained"
                color="warning">
                Купить
                <br /> за {correctPrice(`${price}`)}
                {currency === "rub" ? "₽" : currency === "usd" ? "$" : "€"}
            </Button>
        </Card>
    );
};

PriceButtonLogo.propTypes = {
    price: PropTypes.number,
    currency: PropTypes.string,
};

export default PriceButtonLogo;
