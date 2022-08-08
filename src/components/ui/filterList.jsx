import React from "react";
import PropTypes from "prop-types";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    Checkbox,
    ListItemText,
} from "@mui/material";
import createLabel from "../../utils.js/createLabel";

const FilterList = ({ onToggle, stops, checked, labelId }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton disableGutters onClick={onToggle(stops)} dense>
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
                <ListItemText id={labelId} primary={createLabel(stops)} />
            </ListItemButton>
        </ListItem>
    );
};

FilterList.propTypes = {
    stops: PropTypes.number,
    onToggle: PropTypes.func,
    checked: PropTypes.array,
    labelId: PropTypes.string,
};

export default FilterList;
