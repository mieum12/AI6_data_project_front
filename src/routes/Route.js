import Landing from "../pages/landing/Landing";
import Plus from "../pages/plus/Plus";
import Shelter from "../pages/shelter/Shelter";
import Safety from "../pages/safety/Safety";

export const ROUTE = {
  LANDING_PAGE: {
    path: "/",
    link: "/",
    element: Landing,
  },
  SHELTER_PAGE: {
    path: "/ShelterPage",
    link: "/ShelterPage",
    element: Shelter,
  },
  PLUS_PAGE: {
    path: "/PlusPage",
    link: "/PlusPage",
    element: Plus,
  },
  SAFETY_PAGE: {
    path: "/SafetyPage",
    link: "/SafetyPage",
    element: Safety,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);