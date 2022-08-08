import React from "react";
import {
    Card,
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import CurrencyControl from "./currentControl";
import createLabel from "../../utils.js/createLabel";

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
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                disableGutters
                                onClick={onToggle(stops)}
                                dense>
                                <ListItemIcon sx={{ minWidth: "20px", pl: 1 }}>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(stops) !== -1}
                                        tabIndex={-1}
                                        size="small"
                                        inputProps={{
                                            "aria-labelledby": labelId,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    id={labelId}
                                    primary={createLabel(stops)}
                                />
                            </ListItemButton>
                        </ListItem>
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
