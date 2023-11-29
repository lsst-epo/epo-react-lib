import { CSSProperties } from "react";

interface ShareButtonProps {
  url: string;
  title?: string;
  className?: string;
  showText?: boolean;
  disabled?: boolean;
  disabledStyle?: CSSProperties;
  windowWidth?: number;
  windowHeight?: number;
  beforeOnClick?: () => void | Promise<void>;
  openShareDialogOnClick?: boolean;
  onShareWindowClose?: () => void;
  resetButtonStyle?: boolean;
}

export type { ShareButtonProps };
