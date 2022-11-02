import { useContext } from "react";
import { SocketContext } from "Context/Socket";

export default function useSocket() {
  return useContext(SocketContext);
}
