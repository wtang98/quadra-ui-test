const CustomSocket = (url: string) => {
    let socket: WebSocket | null = null;

    const connect = () => {
        console.log("connection made");
        socket = new WebSocket(url);
    };

    const message = (event: any, callback: any) => {
        socket?.addEventListener(event, callback);
    };

    const close = () => {
        console.log("close");
    };

    const disconnect = () => {
        if (socket !== null) {
            console.log("disconnected");
            socket.close();
            socket = null;
        }
    };

    return {
        connect,
        message,
        disconnect,
        close,
    };
};
export { CustomSocket };
