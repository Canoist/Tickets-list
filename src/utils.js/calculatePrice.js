const calculatePrice = (data, currency) => {
    switch (currency) {
        case "rub":
            return data;
        case "usd":
            return Math.trunc(data / 60.37);
        case "eur":
            return Math.trunc(data / 61.37);
        default:
            return console.error("Wrong param in calculatePrice");
    }
};

export default calculatePrice;
