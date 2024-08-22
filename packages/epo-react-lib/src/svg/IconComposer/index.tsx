import { ComponentType, FunctionComponent } from "react";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import Icons, { IconKey } from "@/svg/icons";

import { SVGProps } from "@/types/svg";

export type { IconKey };

export interface IconComposerProps extends SVGProps {
  icon: IconKey | string;
  customIcons?: Record<string, ComponentType<SVGProps>>;
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
  svgProps,
  ...props
}) => {
  const key = upperFirst(camelCase(icon));
  const iconSet: Record<string, ComponentType<SVGProps>> = {
    ...Icons,
    ...customIcons,
  };

  if (!Object.hasOwn(iconSet, key)) {
    console.error(
      `${icon} icon could not be found. Check spelling and any custom icons added.`
    );
    return null;
  }

  const IconComponent = iconSet[key];

  return <IconComponent {...{ ...props, ...svgProps }} />;
};

export default IconComposer;
