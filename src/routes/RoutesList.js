import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_ARR } from "./Route";

export const RoutesList = () => {
  return (
    <Router>
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          );
        })}
      </Routes>
    </Router>
  );
};
