import dayjs from "dayjs";

export const getFormattedDateTime = (
  value = 0,
  unit = "days",
  format = "YYYY-MM-DD"
) => {
  if (value === 0) {
    return dayjs().format(format);
  } else {
    // @ts-ignore
    return dayjs().add(value, unit).format(format);
  }
};

export const timeFromNow = (date: string) => {
  const timestamp = dayjs(date).format("X");
  const newDate = dayjs.unix(Number(timestamp));
  const relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);
  // @ts-ignore
  return dayjs(newDate).fromNow();
};
