import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup, Typography } from "@mui/material";

const CurrencyControl = ({ onChangeType, currency }) => {
    const handleChangeType = ({ target }) => {
        onChangeType(target.id);
    };

    return (
        <>
            <Typography
                sx={{
                    fontWeight: 500,
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                }}
                paragraph
                display="block">
                Валюта
            </Typography>
            <ButtonGroup
                variant="outlined"
                aria-label="outlined primary button group"
                fullWidth
                sx={{ mb: 3 }}>
                <Button
                    id="rub"
                    onClick={handleChangeType}
                    variant={currency === "rub" ? "contained" : "outlined"}>
                    RUB
                </Button>
                <Button
                    id="usd"
                    onClick={handleChangeType}
                    variant={currency === "usd" ? "contained" : "outlined"}>
                    USD
                </Button>
                <Button
                    id="eur"
                    onClick={handleChangeType}
                    variant={currency === "eur" ? "contained" : "outlined"}>
                    EUR
                </Button>
            </ButtonGroup>
        </>
    );
};

CurrencyControl.propTypes = {
    currency: PropTypes.string,
    onChangeType: PropTypes.func,
};

export default CurrencyControl;
