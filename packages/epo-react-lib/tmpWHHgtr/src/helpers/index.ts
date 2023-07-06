import { isAbsoluteUrl } from "@/lib/utils";

const BASE_URL =
  process.env.STORYBOOK_ENV === "true"
    ? process.env.STORYBOOK_PUBLIC_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

export const isInternalUrl = (url: string) => {
  if (!isAbsoluteUrl(url)) return true;
  return new URL(url).origin === BASE_URL;
};
