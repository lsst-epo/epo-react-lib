/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useAuthenticationContext } from "@/contexts/Authentication";
import Button from "../";

export default function SSOButton({
  service,
  children,
  onClick,
  ...buttonProps
}) {
  const { t } = useTranslation();
  const { loading } = useAuthenticationContext();
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!loading) setPending(false);
  }, [loading]);

  function handleClick() {
    setPending(true);
    onClick();
  }

  return (
    <Button
      icon={service}
      iconSize={30}
      styleAs="tertiary"
      type="button"
      isBlock
      onClick={handleClick}
      {...buttonProps}
      data-testid="sso-button"
    >
      {pending ? t("sign_in.redirecting", { context: service }) : children}
    </Button>
  );
}

SSOButton.prototypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  service: PropTypes.oneOf(["google", "facebook", "email"]),
};
