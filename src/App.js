import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import { Box, Icon } from "@mui/material";
import { useState } from "react";
import FilterBox from "./components/ui/filterBox";
import TicketsList from "./components/ui/ticketsList";
import { flexCenter } from "./innerStyles";
import ticketsJSON from "./mock/tickets";

const initialData = ticketsJSON;

function App() {
    const [tickets, setTickets] = useState(ticketsJSON);
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
                    maxWidth: "680px",
                    ...flexCenter,
                    alignItems: "start",
                }}>
                <FilterBox />
                <TicketsList data={tickets} />
            </Box>
        </Box>
    );
}

export default App;
