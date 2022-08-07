import React, { useState } from "react";
import {
    Button,
    ButtonGroup,
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

const values = [
    "Все",
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
];

const FilterBox = ({ onChangeType, currency }) => {
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleChangeType = ({ target }) => {
        onChangeType(target.id);
    };

    return (
        <Card
            sx={{
                p: 2,
                mx: 2,
                width: "220px",
            }}>
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
                {values.map((value, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                disableGutters
                                onClick={handleToggle(value)}
                                dense>
                                <ListItemIcon sx={{ minWidth: "20px", pl: 1 }}>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        size="small"
                                        inputProps={{
                                            "aria-labelledby": labelId,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={value} />
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
};

export default FilterBox;
