import { createContext } from "react";
import { io } from "socket.io-client";
import { getApiUrl } from "Utils/helper";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = io(getApiUrl());

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
