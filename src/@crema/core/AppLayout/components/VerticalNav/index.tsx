import React from "react";
import List from "@mui/material/List";
import { RouterConfigData } from "@/lib/routesConfig";
import NavVerticalGroup from "./VerticalNavGroup";
import VerticalCollapse from "./VerticalCollapse";
import VerticalItem from "./VerticalItem";
import SIDEBAR_ROUTES from "@/config/sidebarRoutes";

const VerticalNav = () => {
  return (
    <List
      sx={{
        position: "relative",
        padding: 0,
      }}
      component="div"
    >
      {SIDEBAR_ROUTES.map((item: RouterConfigData) => (
        <React.Fragment key={item.id}>
          {item.type === "group" && <NavVerticalGroup item={item} level={0} />}

          {item.type === "collapse" && (
            <VerticalCollapse item={item} level={0} />
          )}

          {item.type === "item" && <VerticalItem item={item} level={0} />}
          {item.type === "itemWithNoParent" && (
            <VerticalItem item={item} level={0} />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default VerticalNav;
