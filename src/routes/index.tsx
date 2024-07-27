import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/home/Home";
import Browse from "../pages/browse/Browse";
import Details from "../pages/details/Details";
import Stream from "../pages/streams/Stream";
import Profile from "../pages/profile/Profile";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="details" element={<Details />} />
        <Route path="streams" element={<Stream />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
);
