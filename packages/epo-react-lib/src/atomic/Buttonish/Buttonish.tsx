import { FunctionComponent } from "react";
import Link from "next/link";
import { isInternalUrl } from "@/helpers/index";
import Button, { ButtonProps } from "@/atomic/Button";

interface ButtonishProps extends ButtonProps {
  text: string;
  url?: string;
  prefetch?: boolean;
}

const Buttonish: FunctionComponent<ButtonishProps> = ({
  text,
  url,
  prefetch = false,
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
      <Link legacyBehavior href={url} prefetch={prefetch} passHref>
        <Button as="a" {...(props as any)}>
          {text}
        </Button>
      </Link>
    );
  }
};

Buttonish.displayName = "Atomic.Buttonish";

export default Buttonish;
