import { FunctionComponent, HTMLProps, PropsWithChildren } from "react";
import { UrlObject } from "url";
import Link from "next/link";
import ExternalLink from "@/atomic/ExternalLink";
import { normalizePathData, isAbsoluteUrl } from "@/lib/utils";
import { isInternalUrl } from "@/helpers/index";

interface MixedLinkElement {
  uri: string;
}

interface MixedLinkProps extends HTMLProps<HTMLAnchorElement> {
  type?: string;
  url: string;
  customText?: string;
  text?: string;
  element?: MixedLinkElement;
  className?: string;
  params?: {
    [key: string]:
      | string
      | number
      | boolean
      | ReadonlyArray<string>
      | ReadonlyArray<number>
      | ReadonlyArray<boolean>;
  };
  prefetch?: boolean;
}

const getPathnameInput = ({
  element,
  url,
}: {
  element?: MixedLinkElement;
  url: string;
}): string => {
  if (element?.uri) return element.uri;
  if (!url) return "/";
  if (isAbsoluteUrl(url)) return new URL(url).pathname;
  return url;
};

const MixedLink: FunctionComponent<PropsWithChildren<MixedLinkProps>> = ({
  children,
  className,
  customText,
  element,
  params,
  text,
  url,
  prefetch = false,
  ...restProps
}) => {
  if (!isInternalUrl(url)) {
    return (
      <ExternalLink href={url} className={className} {...restProps}>
        {!children && (customText ?? text)}
        {children}
      </ExternalLink>
    );
  } else {
    const pathnameInput = getPathnameInput({ element, url });
    const { pathname, pathParams } = normalizePathData(pathnameInput);

    const href: UrlObject = {
      pathname,
      query: { ...pathParams, ...params },
    };

    return (
      <Link
        href={href}
        passHref
        className={className}
        prefetch={prefetch}
        {...(restProps as any)}
      >
        {children || (customText ?? text)}
      </Link>
    );
  }
};

MixedLink.displayName = "Atomic.MixedLink";

export default MixedLink;
