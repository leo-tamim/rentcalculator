import { AppContentView } from "@/@crema";
import AppFixedFooter from "@/@crema/core/AppLayout/UserHeader/AppFixedFooter";
import AppHeader from "@/@crema/core/AppLayout/UserHeader/AppHeader";
import AppSidebar from "@/@crema/core/AppLayout/UserHeader/AppSidebar";
import UserHeaderContainer from "@/@crema/core/AppLayout/UserHeader/UserHeaderContainer";
import UserHeaderWrapper from "@/@crema/core/AppLayout/UserHeader/UserHeaderWrapper";
import Box from "@mui/material/Box";
import clsx from "clsx";
import SnackBar from "@/modules/common/components/Snackbar/Snackbar";

export default function LayoutWithSidebar({ children }: { children: any }) {
  return (
    <UserHeaderContainer
      className={clsx({
        boxedLayout: false,
        framedLayout: false,
      })}
    >
      <UserHeaderWrapper
        className={clsx("userHeaderWrapper", {
          appMainFooter: false,
          appMainFixedFooter: false,
        })}
      >
        <AppHeader />
        <Box className="mainContent">
          <AppSidebar />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </Box>
        {/* <AppThemeSetting /> */}
        <SnackBar />
      </UserHeaderWrapper>
    </UserHeaderContainer>
  );
}
