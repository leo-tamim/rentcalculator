import React, { useMemo } from "react";
import { Icon, ListItemText } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import Box from "@mui/material/Box";
// import IntlMessages from "../../../../../utility/IntlMessages";
import { checkPermission } from "../../../../../utility/helper/RouteHelper";
import { useAuthUser } from "../../../../../utility/AuthHooks";
import VerticalNavItem from "./VerticalNavItem";
import { RouterConfigData } from "@/lib/routesConfig";
import { useRouter } from "next/router";
import AppBadge from "@/@crema/core/AppBadge";

interface VerticalItemProps {
  item: RouterConfigData;
  level: number;
}

const VerticalItem: React.FC<VerticalItemProps> = ({ level, item }) => {
  const { user } = useAuthUser();
  const hasPermission = useMemo(
    () => checkPermission(item.permittedRole, user.role),
    [item.permittedRole, user.role]
  );
  const router = useRouter();

  if (!hasPermission) {
    return null;
  }

  const isActive = (): boolean => {
    const slugs = router.pathname.split("/");
    if (slugs.length > 2) {
      return slugs[1] + "/" + slugs[2] + "/list" === item.url?.substring(1);
    } else {
      return slugs[1] === item.url?.substring(1);
    }
  };

  return (
    <>
      {item.type === "itemWithNoParent" && (
        <Link href={item.url!} as={item.as}>
          <a style={{ textDecoration: "none" }}>
            <VerticalNavItem
              active={isActive()}
              level={level}
              exact={item.exact}
              noParentFlag={true}
            >
              {item.icon && (
                <Box component="span">
                  <Icon
                    sx={{
                      fontSize: 18,
                      display: "block",
                      mr: 4,
                    }}
                    className={clsx("nav-item-icon", "material-icons-outlined")}
                    color="warning"
                  >
                    {item.icon}
                  </Icon>
                </Box>
              )}
              <ListItemText
                className="nav-item-content"
                primary={item.title}
                classes={{ primary: "nav-item-text" }}
              />
              {item.count && (
                <Box sx={{ mr: 3.5 }} className="menu-badge">
                  <AppBadge count={item.count} color={item.color} />
                </Box>
              )}
            </VerticalNavItem>
          </a>
        </Link>
      )}
      {item.type === "item" && (
        <Link href={item.url!} as={item.as}>
          <a style={{ textDecoration: "none" }}>
            <VerticalNavItem
              active={isActive()}
              level={level}
              exact={item.exact}
              noParentFlag={false}
            >
              {item.icon && (
                <Box component="span">
                  <Icon
                    sx={{
                      fontSize: 18,
                      display: "block",
                      mr: 4,
                    }}
                    className={clsx("nav-item-icon", "material-icons-outlined")}
                    color="warning"
                  >
                    {item.icon}
                  </Icon>
                </Box>
              )}
              <ListItemText
                className="nav-item-content"
                primary={item.title}
                classes={{ primary: "nav-item-text" }}
              />
              {item.count && (
                <Box sx={{ mr: 3.5 }} className="menu-badge">
                  <AppBadge count={item.count} color={item.color} />
                </Box>
              )}
            </VerticalNavItem>
          </a>
        </Link>
      )}
    </>
  );
};

export default React.memo(VerticalItem);
