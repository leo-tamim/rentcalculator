import React, { useEffect } from "react";
import AuthLayout from "./AuthLayout";
import { useLayoutActionsContext } from "../../utility/AppContextProvider/LayoutContextProvider";
import { useSidebarActionsContext } from "../../utility/AppContextProvider/SidebarContextProvider";
import { useRouter } from "next/router";

// eslint-disable-next-line
const withLayout = (ComposedComponent: any) => (props: any) => {
  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const router = useRouter();

  useEffect(() => {
    if (router.query.layout) updateNavStyle(router.query.layout as string);
    if (router.query.menuStyle)
      updateMenuStyle(router.query.menuStyle as string);
    if (router.query.sidebarImage) setSidebarBgImage(true);
  }, []);
  return (
    <AuthLayout>
      <ComposedComponent {...props} />
    </AuthLayout>
  );
};

export default withLayout;
