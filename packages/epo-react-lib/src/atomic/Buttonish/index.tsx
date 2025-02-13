import { FunctionComponent, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import Button, { ButtonProps } from "@/atomic/Button";

interface ButtonishProps extends ButtonProps {
  /** @deprecated use `children` */
  text?: string;
  url?: LinkProps["href"];
  prefetch?: LinkProps["prefetch"];
}

const Buttonish: FunctionComponent<PropsWithChildren<ButtonishProps>> = ({
  text,
  url,
  href,
  prefetch = false,
  children,
  ...props
}) => {
  const finalHref = url || href;
  if (!finalHref) return null;

  return (
    <Link {...{ prefetch }} href={finalHref} passHref legacyBehavior>
      <Button as="a" {...(props as ButtonProps)}>
        {text || children}
      </Button>
    </Link>
  );
};

Buttonish.displayName = "Atomic.Buttonish";

export default Buttonish;
