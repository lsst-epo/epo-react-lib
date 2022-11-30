import { FunctionComponent } from "react";
import Link from "next/link";
import { isInternalUrl } from "@/helpers/index";
import Button, { ButtonProps } from "@/atomic/Button";

interface ButtonishProps extends Omit<ButtonProps, "children"> {
  text: string;
  url?: string;
}

const Buttonish: FunctionComponent<ButtonishProps> = ({
  text,
  url,
  ...props
}) => {
  if (!url) return null;

  if (!isInternalUrl(url)) {
    return (
      <Button as="a" href={url} {...(props as any)}>
        {text}
      </Button>
    );
  } else {
    return (
      <Link legacyBehavior href={url} passHref>
        <Button as="a" {...(props as any)}>
          {text}
        </Button>
      </Link>
    );
  }
};

Buttonish.displayName = "Atomic.Buttonish";

export default Buttonish;
