import React, { useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

const FilterBox = () => {
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
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" display="block">
                ВАЛЮТА
            </Typography>
            <ButtonGroup
                variant="outlined"
                aria-label="outlined primary button group">
                <Button>RUB</Button>
                <Button>USD</Button>
                <Button>EUR</Button>
            </ButtonGroup>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem key={value} disablePadding>
                            <ListItemButton
                                role={undefined}
                                onClick={handleToggle(value)}
                                dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{
                                            "aria-labelledby": labelId,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    id={labelId}
                                    primary={`Line item ${value + 1}`}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};
export default FilterBox;
