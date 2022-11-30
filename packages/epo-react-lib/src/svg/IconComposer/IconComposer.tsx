import { PureComponent, createElement } from "react";
import Icons, { IconKey } from "@/svg/icons";
import { capitalize } from "@/lib/utils";
import { SVGProps } from "@/types/svg";

interface IconComposerProps extends SVGProps {
  icon: IconKey | string;
  size?: number;
}

export default class IconComposer extends PureComponent<IconComposerProps> {
  get iconComponent() {
    const key = capitalize(this.props.icon) as IconKey;
    const { [key]: component } = Icons;

    return component;
  }

  render() {
    const { className, size, fill, stroke, svgProps } = this.props;
    const IconComponent = this.iconComponent;

    if (!IconComponent) return false;

    return createElement(IconComponent, {
      svgProps,
      className,
      size,
      fill,
      stroke,
    });
  }
}
