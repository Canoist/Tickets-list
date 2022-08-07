import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import { Box, Icon, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import FilterBox from "./components/ui/filterBox";
import TicketsList from "./components/ui/ticketsList";
import { flexCenter } from "./innerStyles";
import ticketsJSON from "./mock/tickets";

const initialData = ticketsJSON;

const theme = createTheme({
    typography: {
        secondary: {
            color: "rgba(0, 0, 0, 0.26)",
            fontSize: "0.8rem",
        },
        body2: {
            color: "rgba(0, 0, 0, 0.7)",
        },
        h4: {
            color: "rgba(0, 0, 0, 0.7)",
        },
    },
});

function App() {
    const [tickets, setTickets] = useState(ticketsJSON);
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: "100vh",
                    p: 2,
                    ...flexCenter,
                    flexDirection: "column",
                    bgcolor: "#E7EBF0",
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
                        minWidth: "680px",
                        ...flexCenter,
                        alignItems: "start",
                    }}>
                    <FilterBox />
                    <TicketsList data={tickets} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
