import Landing from "../pages/landing/Landing";
import Plus from "../pages/plus/Plus";
import Shelter from "../pages/shelter/Shelter";
import Safety from "../pages/safety/Safety";
import CreatePost from "../pages/createPost/CreatePost";
import PostMain from "../pages/post/PostMain";

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
  CREATEPOST_PAGE: {
    path: "/CreatePostPage",
    link: "/CreatePostPage",
    element: CreatePost,
  },
  POSTLIST_PAGE: {
    path: "/PostMainPage",
    link: "/PostMainPage",
    element: PostMain,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
