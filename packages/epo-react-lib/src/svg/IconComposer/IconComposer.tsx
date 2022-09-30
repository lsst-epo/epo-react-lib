import { PureComponent, createElement } from "react";
import Icons, { IconKey } from "@/svg/icons";
import { capitalize } from "@/helpers/index";
import { SVGProps } from "@/types/svg";

interface IconComposerProps extends SVGProps {
  icon: IconKey | string;
}

export default class IconComposer extends PureComponent<IconComposerProps> {
  get iconComponent() {
    const key = capitalize(this.props.icon) as IconKey;
    const component = Icons[key];

    return component;
  }

  render() {
    const { className, size, fill, stroke } = this.props;
    const IconComponent = this.iconComponent;

    if (!IconComponent) return false;

    return createElement(IconComponent, {
      svgProps: this.props.svgProps,
      className,
      size,
      fill,
      stroke,
    });
  }
}
