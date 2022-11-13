import React, { useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import AppScrollbar from "../../../AppScrollbar";
import MainSidebar from "../../components/MainSidebar";
import Drawer from "@mui/material/Drawer";
import VerticalNav from "../../components/VerticalNav";
import StandardSidebarWrapper from "./StandardSidebarWrapper";
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
  const dispatch = useDispatch();

  const { sidebarTextColor } = useSidebarContext();

  const [navCollapsed, toggleNavCollapsed] = useState<boolean>(false);

  return (
    <>
      <Drawer
        anchor={position}
        open={navCollapsed}
        onClose={() => toggleNavCollapsed((state) => !state)}
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
    </>
  );
};
export default AppSidebar;
