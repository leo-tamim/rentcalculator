import React from "react";
// import { FormattedMessage, injectIntl } from "react-intl";

const InjectMassage = (props: any) => <div>No localization available</div>;

// export default injectIntl(InjectMassage, {
//   forwardRef: false,
// });

export default function IntlMessages({ id }: { id: string }) {
  return <div>No Intl. available</div>;
}
