import { FunctionComponent, HTMLProps, ReactNode } from "react";
import { UrlObject } from "url";
import Link from "next/link";
import ExternalLink from "@/atomic/ExternalLink";
import { normalizePathData, isAbsoluteUrl } from "@/lib/utils";
import { isInternalUrl } from "@/helpers/index";

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

interface MixedLinkElement {
  uri: string;
}

interface MixedLinkProps extends HTMLProps<HTMLAnchorElement> {
  children?: ReactNode;
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
}

const MixedLink: FunctionComponent<MixedLinkProps> = ({
  children,
  className,
  customText,
  element,
  params,
  text,
  url,
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
      <Link href={href} passHref className={className} {...(restProps as any)}>
        {children ? children : customText ?? text}
      </Link>
    );
  }
};

MixedLink.displayName = "Atomic.MixedLink";

export default MixedLink;
