import { Avatar, AvatarProps } from "@mui/material";

type CommonAvatarType = AvatarProps & {
  size?: "sm" | "md" | "xl"; // default is 'md'
};

export default function CommonAvatar({
  size = "md",
  sx,
  ...restProps
}: CommonAvatarType) {
  const getWidthAndHeight = (): number | undefined => {
    switch (size) {
      case "sm":
        return 24;

      case "md":
        return 36;

      case "xl":
        return 56;

      default:
        return;
    }
  };

  return (
    <Avatar
      sx={{
        ...(sx ? sx : {}),
        marginRight: 2,
        width: getWidthAndHeight(),
        height: getWidthAndHeight(),
        textTransform: "capitalize",
      }}
      {...restProps}
    />
  );
}
