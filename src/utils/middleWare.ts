import { updateNumber } from "../redux/slice";

export const socketMiddleware =
    (socket: any) =>
    ({ dispatch }: any) =>
    (next: (arg1: any) => void) =>
    (action: { type: any }) => {
        switch (action.type) {
            case "socket/connect":
                socket.connect("connect", () => {
                    console.log("connected");
                });

                socket.message("message", (data: { data: number }) => {
                    dispatch(updateNumber(data.data));
                });
                socket.close("close", () => {
                    console.log("closed");
                });
                break;

            case "socket/disconnect":
                socket.disconnect();
                break;

            default:
                break;
        }
        next(action);
    };
