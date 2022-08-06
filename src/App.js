import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import { Box, Icon } from "@mui/material";
import FilterBox from "./components/ui/filterBox";
import { flexCenter } from "./innerStyles";

function App() {
    return (
        <Box
            sx={{
                height: "100vh",
                p: 2,
                ...flexCenter,
                flexDirection: "column",
            }}>
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
            <Box
                sx={{
                    backgroundColor: "gold",
                    maxWidth: "600px",
                    ...flexCenter,
                    alignItems: "start",
                }}>
                <FilterBox />
                <Box></Box>
            </Box>
        </Box>
    );
}

export default App;
