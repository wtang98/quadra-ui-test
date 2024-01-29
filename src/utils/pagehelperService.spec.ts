import { returnNumberColor } from "./pagehelperService";

describe("returnNumberColor", () => {
    it("returns green", () => {
        const result = returnNumberColor(1, 2);
        expect(result).toBe("text-green-500");
    });
    it("returns red", () => {
        const result = returnNumberColor(2, 1);
        expect(result).toBe("text-red-500");
    });
    it("returns white", () => {
        const result = returnNumberColor(1, 1);
        expect(result).toBe("text-white");
    });
});
