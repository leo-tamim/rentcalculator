import React, { ReactNode } from "react";
// import { IntlProvider } from "react-intl";
// import { IntlGlobalProvider } from "../helper/Utils";
import AppLocale from "@/shared/localization";
import { useLocaleContext } from "../AppContextProvider/LocaleContextProvide";

interface AppLocaleProviderProps {
  children: ReactNode;
}

const AppLocaleProvider: React.FC<AppLocaleProviderProps> = (props) => {
  const { locale } = useLocaleContext();
  const currentAppLocale = AppLocale[locale.locale];

  return <div>No localization available</div>;
};

export default AppLocaleProvider;
