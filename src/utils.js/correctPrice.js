const correctPrice = (price) => {
    if (price.length <= 3) {
        return price;
    } else if (price.length <= 6) {
        return `${price.slice(0, -3)} ${price.slice(-3)}`;
    } else if (price.length <= 9) {
        return `${price.slice(0, -6)} ${price.slice(-6, -3)} ${price.slice(
            -3
        )}`;
    } else return;
};

export default correctPrice;
