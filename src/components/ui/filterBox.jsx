import React from "react";
import { Card, List, Typography } from "@mui/material";
import PropTypes from "prop-types";
import CurrencyControl from "./currentControl";
import FilterList from "./filterList";

const FilterBox = ({
    onChangeType,
    currency,
    stopValues,
    onToggle,
    checked,
}) => {
    return (
        <Card
            sx={{
                p: 2,
                mx: 2,
                width: "220px",
            }}>
            <CurrencyControl currency={currency} onChangeType={onChangeType} />
            <Typography
                sx={{
                    textTransform: "uppercase",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                }}
                variant="body1"
                display="block"
                gutterBottom>
                Количество пересадок
            </Typography>
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
                dense={true}>
                {stopValues.map((stops, index) => {
                    const labelId = `checkbox-list-label-${index}`;
                    return (
                        <FilterList
                            key={index}
                            stops={stops}
                            onToggle={onToggle}
                            labelId={labelId}
                            checked={checked}
                        />
                    );
                })}
            </List>
        </Card>
    );
};

FilterBox.propTypes = {
    currency: PropTypes.string,
    onChangeType: PropTypes.func,
    stopValues: PropTypes.array,
    onToggle: PropTypes.func,
    checked: PropTypes.array,
};

export default FilterBox;
