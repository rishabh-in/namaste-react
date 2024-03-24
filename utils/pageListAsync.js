import Loading from "../src/components/Loading";
import loadable from "./loadable";

export const About = loadable(() => import("../src/components/About"), {fallback: <Loading />});
export const Contact = loadable(() => import("../src/components/Contact"), {fallback: <Loading />});
export const BodyContainer = loadable(() => import("../src/components/Body"), {fallback: <Loading />});
export const RestaurantDetails = loadable(() => import("../src/components/RestaurantDetails"), {fallback: <Loading />});
export const Error = loadable(() => import("../src/components/Error"), {fallback: <Loading />});

