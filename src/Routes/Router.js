import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./RouteSwitch";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <RouteSwitch />
    </BrowserRouter>
  );
}
