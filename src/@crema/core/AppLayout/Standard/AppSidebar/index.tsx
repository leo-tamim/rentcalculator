import React from "react";
import clsx from "clsx";
import AppScrollbar from "../../../AppScrollbar";
import MainSidebar from "../../components/MainSidebar";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import VerticalNav from "../../components/VerticalNav";
import StandardSidebarWrapper from "./StandardSidebarWrapper";
import UserInfo from "../../components/UserInfo";
import { useLayoutContext } from "../../../../utility/AppContextProvider/LayoutContextProvider";
import { useSidebarContext } from "../../../../utility/AppContextProvider/SidebarContextProvider";

interface AppSidebarProps {
  position?: "left" | "top" | "right" | "bottom";
  variant?: string;
}

const AppSidebar: React.FC<AppSidebarProps> = ({
  variant = "",
  position = "left",
}) => {
  const [navCollapsed, toggleNavCollapsed] = React.useState<boolean>(false);
  const { footer, footerType } = useLayoutContext();

  const { sidebarTextColor } = useSidebarContext();

  const handleToggleDrawer = () => {
    toggleNavCollapsed((state) => !state);
  };

  return (
    <>
      <Hidden xlUp>
        <Drawer
          anchor={position}
          open={navCollapsed}
          onClose={() => handleToggleDrawer()}
          classes={{
            root: clsx(variant),
            paper: clsx(variant),
          }}
          style={{ position: "absolute" }}
        >
          <StandardSidebarWrapper className="standard-sidebar">
            <MainSidebar>
              <UserInfo color={sidebarTextColor} />
              <AppScrollbar
                sx={{
                  py: 2,
                  height: "calc(100vh - 70px) !important",
                }}
                scrollToTop={false}
              >
                <VerticalNav />
              </AppScrollbar>
            </MainSidebar>
          </StandardSidebarWrapper>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <StandardSidebarWrapper className="standard-sidebar">
          <MainSidebar>
            <UserInfo color={sidebarTextColor} />
            <AppScrollbar
              className={clsx({
                "has-footer-fixed": footer && footerType === "fixed",
              })}
              sx={{
                py: 2,
                height: "calc(100vh - 141px) !important",
                "&.has-footer-fixed": {
                  height: "calc(100vh - 188px) !important",
                },
              }}
              scrollToTop={false}
            >
              <VerticalNav />
            </AppScrollbar>
          </MainSidebar>
        </StandardSidebarWrapper>
      </Hidden>
    </>
  );
};
export default AppSidebar;
