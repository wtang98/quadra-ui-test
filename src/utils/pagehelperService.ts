import { colorDictonary } from "@/types/types";

export const returnNumberColor = (
    oldvalue: number,
    number: number
): colorDictonary => {
    if (oldvalue > number) {
        return colorDictonary.red;
    } else if (oldvalue < number) {
        return colorDictonary.green;
    }
    return colorDictonary.white;
};
