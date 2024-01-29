export const returnNumberColor = (oldvalue: number, number: number): string => {
    if (oldvalue > number) {
        return "text-red-500";
    } else if (oldvalue < number) {
        return "text-green-500";
    }
    return "text-white";
};
