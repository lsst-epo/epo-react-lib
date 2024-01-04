import { PureComponent, ComponentType, createElement } from "react";
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
export default class IconComposer extends PureComponent<IconComposerProps> {
  get iconComponent() {
    const { icon, customIcons = {} } = this.props;
    const key = capitalize(icon) as IconKey;
    const { [key]: component } = { ...Icons, ...customIcons };

    return component;
  }

  render() {
    const { className, size, fill, stroke, svgProps } = this.props;
    const IconComponent = this.iconComponent;

    if (!IconComponent) {
      console.debug(
        `${this.props.icon} icon could not be found. Check spelling and any custom icons added.`
      );
      return null;
    }

    return createElement(IconComponent, {
      svgProps,
      className,
      size,
      fill,
      stroke,
    });
  }
}
