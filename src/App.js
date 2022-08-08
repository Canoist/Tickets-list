import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import FilterBox from "./components/ui/filterBox";
import TicketsList from "./components/ui/ticketsList";
import { flexCenter } from "./innerStyles";
import ticketsJSON from "./mock/tickets";
import MainIcon from "./components/mainIcon";

const theme = createTheme({
    typography: {
        secondary: {
            color: "rgba(0, 0, 0, 0.4)",
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

const stopValues = [null, 0, 1, 2, 3];
const tickets = ticketsJSON.tickets;

function App() {
    const [currency, setCurrency] = useState("rub");
    const [checked, setChecked] = useState([null]);

    const handleChangeCurrency = (typeCurrnency) => {
        setCurrency(typeCurrnency);
    };

    function filterTickets() {
        const filteredTickets = tickets.filter((ticket) =>
            checked.includes(ticket.stops)
        );
        return filteredTickets.length ? filteredTickets : tickets;
    }

    const filteredTickets = filterTickets();

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
        <ThemeProvider theme={theme}>
            <Container
                maxWidth={false}
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
                        minWidth: "100%",
                        ...flexCenter,
                        alignItems: "start",
                    }}>
                    <FilterBox
                        currency={currency}
                        onChangeType={handleChangeCurrency}
                        stopValues={stopValues}
                        onToggle={handleToggle}
                        checked={checked}
                    />
                    <TicketsList data={filteredTickets} currency={currency} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
