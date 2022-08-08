const createLabel = (value) => {
    switch (value) {
        case null:
            return "Все";

        case 0:
            return "Без пересадок";

        case 1:
            return "1 пересадка";

        case 2:
            return "2 пересадки";

        case 3:
            return "3 пересадки";

        default:
            console.error(
                "The argument must be only '1, 2, 3, 4' with type number"
            );
            break;
    }
};

export default createLabel;
