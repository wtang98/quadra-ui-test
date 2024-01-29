import { render, screen } from "@testing-library/react";
import Page from "./page";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import useMainPageHook from "../utils/useMainPageHook";

jest.mock("../utils/useMainPageHook", () => ({
    __esModule: true,
    default: jest.fn(),
}));

beforeEach(() => {
    useMainPageHook.mockReturnValue({
        numberColor: "text-red-500",
    });
});

describe("it renders", () => {
    it("renders with correct text and text color classnames", () => {
        const mockStore = configureStore([])({
            fileReducer: { value: { number: 1 } },
        });
        const { container } = render(
            <Provider store={mockStore}>
                <Page />
            </Provider>
        );
        screen.debug();
        expect(screen.getByText("Quadra Test")).toBeInTheDocument();
        expect(screen.getByText(1)).toBeInTheDocument();
        expect(container.getElementsByClassName("text-white")).toHaveLength(1);
        expect(container.getElementsByClassName("text-red-500")).toHaveLength(
            1
        );
    });
});
