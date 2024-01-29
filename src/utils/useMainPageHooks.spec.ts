import { renderHook } from "@testing-library/react";
import useMainPageHook from "./useMainPageHook";

describe("it renders", () => {
    it("renders with correct text and text color classnames", () => {
        const dispatch = jest.fn();
        const result = renderHook(() =>
            useMainPageHook("ws://localhost:8080", dispatch)
        );
        const numberColor = result.result.current.numberColor;
        expect(numberColor).toBe("text-white text-green-500 text-red-500");
    });
});
