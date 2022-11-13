import React from "react";
import clsx from "clsx";
import AppScrollbar from "../../../AppScrollbar";
import MainSidebar from "../../components/MainSidebar";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import VerticalNav from "../../components/VerticalNav";
import SidebarWrapper from "./SidebarWrapper";
import { useLayoutContext } from "../../../../utility/AppContextProvider/LayoutContextProvider";
import UserInfo from "../../components/UserInfo";
import { useSidebarContext } from "../../../../utility/AppContextProvider/SidebarContextProvider";

interface AppSidebarProps {
  position?: "left" | "top" | "right" | "bottom";
  variant?: string;
}

const AppSidebar: React.FC<AppSidebarProps> = ({
  variant = "",
  position = "left",
}) => {
  const { footer, footerType } = useLayoutContext();

  const { sidebarTextColor } = useSidebarContext();
  const [navCollapsed, toggleNavCollapsed] = React.useState<boolean>(false);

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
          <SidebarWrapper className="mini-toggle-sidebar">
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
          </SidebarWrapper>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <SidebarWrapper className="mini-toggle-sidebar">
          <MainSidebar>
            <UserInfo color={sidebarTextColor} />
            <AppScrollbar
              className={clsx({
                "has-footer-fixed": footer && footerType === "fixed",
              })}
              sx={{
                py: 2,
                height: "calc(100vh - 70px) !important",
                "&.has-footer-fixed": {
                  height: "calc(100vh - 117px) !important",
                },
              }}
              scrollToTop={false}
            >
              <VerticalNav />
            </AppScrollbar>
          </MainSidebar>
        </SidebarWrapper>
      </Hidden>
    </>
  );
};
export default AppSidebar;
