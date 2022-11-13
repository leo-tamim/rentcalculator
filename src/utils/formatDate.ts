import { KEY_DEFAULT_UI_DATE_FORMAT } from "@/config/keys";
import dayjs from "dayjs";
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

export default function formatDate(dateStr?: string): string {
  // @ts-ignore
  return dayjs.utc(dateStr).format(KEY_DEFAULT_UI_DATE_FORMAT);
}
