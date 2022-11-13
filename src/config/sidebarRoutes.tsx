import { RouterConfigData } from "@/lib/routesConfig";

import { FcOrgUnit, FcBookmark } from "react-icons/fc";

const SIDEBAR_ROUTES: RouterConfigData[] = [
  {
    id: "app",
    title: "Application",
    type: "group",
    children: [],
  },
  {
    id: "products",
    title: "Dashboard",
    type: "itemWithNoParent",
    url: "/",
    icon: <FcOrgUnit />,
  },
  {
    id: "product-attribute",
    title: "Rent Product",
    type: "itemWithNoParent",
    icon: <FcBookmark />,
    url: "/product",
  },
];

export default SIDEBAR_ROUTES;
