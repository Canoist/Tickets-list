import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import FilterBox from "./components/ui/filterBox";
import TicketsList from "./components/ui/ticketsList";
import { flexCenter } from "./innerStyles";
import ticketsJSON from "./mock/tickets";
import MainIcon from "./components/mainIcon";

const initialData = ticketsJSON;

const theme = createTheme({
    typography: {
        secondary: {
            color: "rgba(0, 0, 0, 0.26)",
            fontSize: "0.8rem",
        },
        body2: {
            fontWeight: "500",
            fontFamily: ["Montserrat", "sans-serif"].join(","),
        },
    },
    palette: {
        text: {
            primary: "rgba(0, 0, 0, 0.7)",
        },
    },
});

function App() {
    const [tickets, setTickets] = useState(ticketsJSON);
    const [currency, setCurrency] = useState("rub");

    const handleChangeCurrency = (typeCurrnency) => {
        setCurrency(typeCurrnency);
    };

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
                <MainIcon />
                <Box
                    sx={{
                        minWidth: "680px",
                        ...flexCenter,
                        alignItems: "start",
                    }}>
                    <FilterBox currency={currency} onChangeType={handleChangeCurrency} />
                    <TicketsList data={tickets} currency={currency}/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
