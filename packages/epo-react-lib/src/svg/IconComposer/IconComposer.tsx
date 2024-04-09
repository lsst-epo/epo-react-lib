import { ComponentType, FunctionComponent } from "react";
import Icons, { IconKey } from "@/svg/icons";
import { capitalize } from "@/lib/utils";
import { SVGProps } from "@/types/svg";

export interface IconComposerProps extends SVGProps {
  icon: IconKey | string;
  customIcons?: { [key: string]: ComponentType<SVGProps> };
  size?: number | string;
}

/**
 * IconComposer receives the name of an icon and renders it. Additionally, custom icons can be passed
 * to the component which can then be re-exported so another project can provide its own icons and
 * overwrite the included icons.
 *
 * When adding icons, name the icon based on the content of the icon rather than it's associated action.
 * For example a floppy disk icon should be named "FloppyDisk" and not "Save", there could be multiple
 * icons associated with the action "Save" but there is only one floppy disk.
 */
const IconComposer: FunctionComponent<IconComposerProps> = ({
  icon,
  customIcons = {},
  ...props
}) => {
  const key = capitalize(icon) as IconKey;
  const { [key]: IconComponent } = { ...Icons, ...customIcons };

  if (!IconComponent) {
    console.error(
      `${icon} icon could not be found. Check spelling and any custom icons added.`
    );
    return null;
  }

  return <IconComponent {...props} />;
};

export default IconComposer;
