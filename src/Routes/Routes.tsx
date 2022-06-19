import Dream from "../Pages/Dream";
import Dream2 from "../Pages/Dream2";
import GetStarted from "../Pages/GetStarted";
import Home from "../Pages/Home";
import University from "../Pages/University";

const r: Array<any> = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/SWE",
    component: <GetStarted />,
  },
  {
    path: "/uni",
    component: <University />,
  },
  {
    path: "/dream/1",
    component: <Dream />,
  },
  {
    path: "/dream/2",
    component: <Dream2 />,
  },
];

export default r;
