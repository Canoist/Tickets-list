import moment from "moment/min/moment-with-locales";

const translateTime = (date) => {
    const newDate = moment(date, "H:mm").format("HH:mm");
    return newDate;
};

export default translateTime;
