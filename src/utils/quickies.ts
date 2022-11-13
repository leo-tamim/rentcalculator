import { KEY_CDN_URL } from "@/config/keys";

export const getImageUrlByName = (fileName: string): string =>
  `${KEY_CDN_URL}/${fileName}`;

export const camelCaseToSpacedString = (str: string): string =>
  str
    .replace(/([A-Z])/g, " $1")
    // uppercase the first character
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
