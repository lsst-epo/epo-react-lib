import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const CircularLoader: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 61.6 62.9",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path
        d="M36.4,3.5c0.9,0.2,1.8,0.4,2.7,0.7v8.4c0,0.1,0,0.3,0.1,0.4c0.1,0.4,0.3,0.8,0.7,1c1.5,0.8,2.9,1.8,4.1,3
			c0,0.2-0.1,0.4-0.1,0.7c0,1.6,1.3,2.9,2.9,2.9s2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9c-0.3,0-0.5,0-0.7,0.1c-1.2-1.2-2.5-2.2-4-3V5.3
			c4.4,2,8.3,5.1,11.2,9c-0.2,0.4-0.3,0.8-0.3,1.2c0,1.6,1.3,2.9,2.9,2.9s2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9c-0.1,0-0.1,0-0.2,0
			C51.3,6.4,44.5,2,37,0.5c-0.8-0.1-1.6,0.4-1.8,1.2C35.1,2.5,35.6,3.3,36.4,3.5z"
      />
      <path
        d="M57.4,20.7c-0.6,1-0.2,2.2,0.7,2.7c1,0.6,2.2,0.2,2.7-0.7c0.6-1,0.2-2.2-0.7-2.7C59.1,19.4,57.9,19.7,57.4,20.7
			z"
      />
      <path
        d="M54.3,28.4c0,0,0-0.1-0.1-0.2l-2.9-3V25l1-4c0-0.1-0.1-0.3-0.2-0.2c-0.1,0-0.2,0-0.3,0.1l-3,2.9h-0.1l-4-1
			c-0.1-0.1-0.3,0.1-0.3,0.2c0,0.1,0,0.1,0.1,0.3l2.9,3h0.1l-1,4c0,0.1,0.1,0.3,0.2,0.3s0.1,0,0.3-0.1l3-2.9h0.1l4,1
			C54,28.7,54.2,28.6,54.3,28.4z"
      />
      <path
        d="M60.1,28.2c-0.5,0.1-1,0.3-1.3,0.8c-0.1,0.3-0.2,0.5-0.2,0.7c0.2,5.5-1.2,10.9-4.2,15.6
			c-0.5,0.7-0.2,1.7,0.5,2.1c0.7,0.5,1.7,0.3,2.1-0.4c0.2-0.3,0.3-0.6,0.5-1c2.8-4.9,4.3-10.6,4.1-16.3C61.5,28.8,60.9,28.2,60.1,28.2
			z"
      />
      <path d="M48.3,35.3c-0.6,1-0.2,2.2,0.7,2.7s2.2,0.2,2.7-0.7c0.6-1,0.2-2.2-0.7-2.7C50.1,34,48.9,34.3,48.3,35.3z" />
      <path
        d="M51.7,49c-0.6,0.7-1.3,1.4-1.9,2l-7.3-4.2c-0.1-0.1-0.3-0.1-0.4-0.2c-0.4-0.1-0.8-0.1-1.2,0.1
			c-1.5,0.9-3,1.6-4.7,2c-0.2-0.2-0.3-0.3-0.6-0.4c-1.4-0.8-3.2-0.3-4,1.1s-0.3,3.2,1.1,4c1.4,0.8,3.2,0.3,4-1.1
			c0.1-0.2,0.2-0.4,0.3-0.7c1.6-0.5,3.1-1.1,4.6-1.9l5.7,3.3c-3.9,2.9-8.5,4.6-13.4,5.2c-0.2-0.3-0.5-0.6-0.9-0.8
			c-1.4-0.8-3.2-0.3-4,1.1s-0.3,3.2,1.1,4c1.4,0.8,3.2,0.3,4-1.1c0-0.1,0-0.1,0.1-0.2c7.6-0.8,14.8-4.4,19.9-10.1
			c0.5-0.6,0.5-1.6-0.1-2.2C53.2,48.4,52.3,48.4,51.7,49z"
      />
      <path
        d="M28.9,53.9c0.1,0,0.1-0.2,0.1-0.3l-1-4v-0.1l2.9-3c0.1,0,0.1-0.3,0-0.4s-0.1,0-0.3-0.1l-4,1h-0.1l-3-2.9
			c-0.1-0.1-0.3-0.1-0.4,0c-0.1,0,0,0.1-0.1,0.3l1,4v0.1l-2.9,3c-0.1,0.1-0.1,0.2,0,0.4c0,0,0.1,0,0.2,0l4-1l0.2,0.1l3,2.9
			C28.7,54,28.8,54.1,28.9,53.9z"
      />
      <path
        d="M23.6,57.9c-1,0.6-1.3,1.8-0.7,2.7c0.6,1,1.8,1.3,2.7,0.7c1-0.6,1.3-1.8,0.7-2.7C25.8,57.6,24.6,57.3,23.6,57.9
			z"
      />
      <path
        d="M17.9,55.2C13,52.6,9,48.7,6.5,43.8c-0.4-0.8-1.3-1.1-2-0.7c-0.8,0.4-1.1,1.3-0.7,2c0.2,0.3,0.4,0.6,0.6,1
			c2.8,4.9,7,9,12.1,11.7c0.8,0.4,1.7,0.1,2.1-0.6c0.2-0.5,0.2-1,0-1.5C18.3,55.4,18.1,55.3,17.9,55.2z"
      />
      <path
        d="M17.5,46.2c1-0.6,1.3-1.8,0.7-2.7c-0.6-1-1.8-1.3-2.7-0.7c-1,0.6-1.3,1.8-0.7,2.7
			C15.3,46.4,16.5,46.7,17.5,46.2z"
      />
      <path
        d="M4.6,39.5c-0.3-0.9-0.6-1.8-0.8-2.7l7.3-4.2c0.1-0.1,0.2-0.2,0.3-0.2c0.3-0.3,0.5-0.7,0.5-1.1
			c0-1.7,0.2-3.4,0.6-5c0.2-0.1,0.4-0.1,0.6-0.3c1.4-0.8,1.9-2.6,1.1-4c-0.8-1.4-2.6-1.9-4-1.1c-1.4,0.8-1.9,2.6-1.1,4
			c0.1,0.2,0.3,0.4,0.4,0.6c-0.4,1.6-0.6,3.3-0.6,5l-5.7,3.3C2.7,29,3.4,24.1,5.4,19.6c0.4,0,0.8-0.2,1.2-0.4c1.4-0.8,1.9-2.6,1.1-4
			s-2.6-1.9-4-1.1c-1.4,0.8-1.9,2.6-1.1,4c0,0.1,0.1,0.1,0.1,0.2c-3.1,7-3.6,15-1.1,22.3c0.3,0.7,1.1,1.2,1.9,1
			C4.4,41.1,4.8,40.3,4.6,39.5z"
      />
      <path
        d="M23,17.2c0-0.1-0.1-0.1-0.2-0.2l-4-1.1l-0.1-0.1l-1.1-4c0-0.1-0.1-0.2-0.3-0.2c0,0-0.1,0.1-0.1,0.2l-1.1,4
			l-0.2,0.1l-4,1.1c-0.1,0.1-0.2,0.2-0.1,0.3c0,0.1,0.1,0.2,0.2,0.2l4,1.1l0.1,0.1l1.1,4c0,0.1,0.2,0.2,0.3,0.2s0.1-0.1,0.2-0.2l1.1-4
			v-0.1l4-1.1C22.9,17.5,23,17.3,23,17.2z"
      />
      <circle cx="9" cy="10.8" r="2" />
      <path
        d="M15.5,7.4c0.3,0,0.5-0.1,0.7-0.2C20.9,4.3,26.3,2.8,31.8,3c0.9,0.1,1.6-0.6,1.6-1.4C33.5,0.7,32.8,0,32,0
			c-0.4,0-0.7,0-1.1,0c-5.7,0-11.3,1.6-16.2,4.6C14,5.1,13.8,6,14.2,6.7C14.5,7.1,15,7.4,15.5,7.4z"
      />
      <circle cx="26.2" cy="11.3" r="2" />
    </svg>
  );
};

CircularLoader.displayName = "SVG.CircularLoader";

export default CircularLoader;
