import moment from "moment/min/moment-with-locales";

const translateDate = (date) => {
    const newDate = moment(date, "DD-MM-YY").format("D MMM YYYY, dd");
    return newDate;
};

export default translateDate;
