import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const FocalPlane: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  ...props
}) => {
  const uniqueProps = {
    ...props,
    viewBox: "0 0 610 610",
    width: size,
    height: size,
    fill: "none",
    stroke: "#fdda78",
    strokeWidth: 1,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <g fill="none">
        <path d="M565 125V85h-40V45h-40V5H125v40H85v40H45v40H5v360h40v40h40v40h40v40h360v-40h40v-40h40v-40h40V125z" />
        <path d="M125 5h40v40h-40z" />
        <path d="M125 5h40v40h-40zM165 5h40v40h-40z" />
        <path d="M165 5h40v40h-40zM205 5h40v40h-40z" />
        <path d="M205 5h40v40h-40zM125 45h40v40h-40z" />
        <path d="M125 45h40v40h-40zM165 45h40v40h-40z" />
        <path d="M165 45h40v40h-40zM205 45h40v40h-40z" />
        <path d="M205 45h40v40h-40zM125 85h40v40h-40z" />
        <path d="M125 85h40v40h-40zM165 85h40v40h-40z" />
        <path d="M165 85h40v40h-40zM205 85h40v40h-40z" />
        <path d="M205 85h40v40h-40zM85 45h40v40H85z" />
        <path d="M85 45h40v40H85zM85 85h40v40H85z" />
        <path d="M85 85h40v40H85zM45 85h40v40H45z" />
        <path d="M45 85h40v40H45zM245 5h40v40h-40z" />
        <path d="M245 5h40v40h-40zM285 5h40v40h-40z" />
        <path d="M285 5h40v40h-40zM325 5h40v40h-40z" />
        <path d="M325 5h40v40h-40zM245 45h40v40h-40z" />
        <path d="M245 45h40v40h-40zM285 45h40v40h-40z" />
        <path d="M285 45h40v40h-40zM325 45h40v40h-40z" />
        <path d="M325 45h40v40h-40zM245 85h40v40h-40z" />
        <path d="M245 85h40v40h-40zM285 85h40v40h-40z" />
        <path d="M285 85h40v40h-40zM325 85h40v40h-40z" />
        <path d="M325 85h40v40h-40zM365 5h40v40h-40z" />
        <path d="M365 5h40v40h-40zM405 5h40v40h-40z" />
        <path d="M405 5h40v40h-40zM445 5h40v40h-40z" />
        <path d="M445 5h40v40h-40zM365 45h40v40h-40z" />
        <path d="M365 45h40v40h-40zM405 45h40v40h-40z" />
        <path d="M405 45h40v40h-40zM445 45h40v40h-40z" />
        <path d="M445 45h40v40h-40zM365 85h40v40h-40z" />
        <path d="M365 85h40v40h-40zM405 85h40v40h-40z" />
        <path d="M405 85h40v40h-40zM445 85h40v40h-40z" />
        <path d="M445 85h40v40h-40zM205 125h40v40h-40z" />
        <path d="M205 125h40v40h-40zM205 165h40v40h-40z" />
        <path d="M205 165h40v40h-40zM205 205h40v40h-40z" />
        <path d="M205 205h40v40h-40zM165 125h40v40h-40z" />
        <path d="M165 125h40v40h-40zM165 165h40v40h-40z" />
        <path d="M165 165h40v40h-40zM165 205h40v40h-40z" />
        <path d="M165 205h40v40h-40zM125 125h40v40h-40z" />
        <path d="M125 125h40v40h-40zM125 165h40v40h-40z" />
        <path d="M125 165h40v40h-40zM125 205h40v40h-40z" />
        <path d="M125 205h40v40h-40zM205 245h40v40h-40z" />
        <path d="M205 245h40v40h-40zM205 285h40v40h-40z" />
        <path d="M205 285h40v40h-40zM205 325h40v40h-40z" />
        <path d="M205 325h40v40h-40zM165 245h40v40h-40z" />
        <path d="M165 245h40v40h-40zM165 285h40v40h-40z" />
        <path d="M165 285h40v40h-40zM165 325h40v40h-40z" />
        <path d="M165 325h40v40h-40zM125 245h40v40h-40z" />
        <path d="M125 245h40v40h-40zM125 285h40v40h-40z" />
        <path d="M125 285h40v40h-40zM125 325h40v40h-40z" />
        <path d="M125 325h40v40h-40zM205 365h40v40h-40z" />
        <path d="M205 365h40v40h-40zM205 405h40v40h-40z" />
        <path d="M205 405h40v40h-40zM205 445h40v40h-40z" />
        <path d="M205 445h40v40h-40zM165 365h40v40h-40z" />
        <path d="M165 365h40v40h-40zM165 405h40v40h-40z" />
        <path d="M165 405h40v40h-40zM165 445h40v40h-40z" />
        <path d="M165 445h40v40h-40zM125 365h40v40h-40z" />
        <path d="M125 365h40v40h-40zM125 405h40v40h-40z" />
        <path d="M125 405h40v40h-40zM125 445h40v40h-40z" />
        <path d="M125 445h40v40h-40zM5 125h40v40H5z" />
        <path d="M5 125h40v40H5zM5 165h40v40H5z" />
        <path d="M5 165h40v40H5zM5 205h40v40H5z" />
        <path d="M5 205h40v40H5zM45 125h40v40H45z" />
        <path d="M45 125h40v40H45zM45 165h40v40H45z" />
        <path d="M45 165h40v40H45zM45 205h40v40H45z" />
        <path d="M45 205h40v40H45zM85 125h40v40H85z" />
        <path d="M85 125h40v40H85zM85 165h40v40H85z" />
        <path d="M85 165h40v40H85zM85 205h40v40H85z" />
        <path d="M85 205h40v40H85zM5 245h40v40H5z" />
        <path d="M5 245h40v40H5zM5 285h40v40H5z" />
        <path d="M5 285h40v40H5zM5 325h40v40H5z" />
        <path d="M5 325h40v40H5zM45 245h40v40H45z" />
        <path d="M45 245h40v40H45zM45 285h40v40H45z" />
        <path d="M45 285h40v40H45zM45 325h40v40H45z" />
        <path d="M45 325h40v40H45zM85 245h40v40H85z" />
        <path d="M85 245h40v40H85zM85 285h40v40H85z" />
        <path d="M85 285h40v40H85zM85 325h40v40H85z" />
        <path d="M85 325h40v40H85zM5 365h40v40H5z" />
        <path d="M5 365h40v40H5zM5 405h40v40H5z" />
        <path d="M5 405h40v40H5zM5 445h40v40H5z" />
        <path d="M5 445h40v40H5zM45 365h40v40H45z" />
        <path d="M45 365h40v40H45zM45 405h40v40H45z" />
        <path d="M45 405h40v40H45zM45 445h40v40H45z" />
        <path d="M45 445h40v40H45zM85 365h40v40H85z" />
        <path d="M85 365h40v40H85zM85 405h40v40H85z" />
        <path d="M85 405h40v40H85zM85 445h40v40H85z" />
        <path d="M85 445h40v40H85zM245 125h40v40h-40z" />
        <path d="M245 125h40v40h-40zM245 165h40v40h-40z" />
        <path d="M245 165h40v40h-40zM245 205h40v40h-40z" />
        <path d="M245 205h40v40h-40zM285 125h40v40h-40z" />
        <path d="M285 125h40v40h-40zM285 165h40v40h-40z" />
        <path d="M285 165h40v40h-40zM285 205h40v40h-40z" />
        <path d="M285 205h40v40h-40zM325 125h40v40h-40z" />
        <path d="M325 125h40v40h-40zM325 165h40v40h-40z" />
        <path d="M325 165h40v40h-40zM325 205h40v40h-40z" />
        <path d="M325 205h40v40h-40zM245 245h40v40h-40z" />
        <path d="M245 245h40v40h-40zM245 285h40v40h-40z" />
        <path d="M245 285h40v40h-40zM245 325h40v40h-40z" />
        <path d="M245 325h40v40h-40zM285 245h40v40h-40z" />
        <path d="M285 245h40v40h-40zM285 285h40v40h-40z" />
        <path d="M285 285h40v40h-40zM285 325h40v40h-40z" />
        <path d="M285 325h40v40h-40zM325 245h40v40h-40z" />
        <path d="M325 245h40v40h-40zM325 285h40v40h-40z" />
        <path d="M325 285h40v40h-40zM325 325h40v40h-40z" />
        <path d="M325 325h40v40h-40zM245 365h40v40h-40z" />
        <path d="M245 365h40v40h-40zM245 405h40v40h-40z" />
        <path d="M245 405h40v40h-40zM245 445h40v40h-40z" />
        <path d="M245 445h40v40h-40zM285 365h40v40h-40z" />
        <path d="M285 365h40v40h-40zM285 405h40v40h-40z" />
        <path d="M285 405h40v40h-40zM285 445h40v40h-40z" />
        <path d="M285 445h40v40h-40zM325 365h40v40h-40z" />
        <path d="M325 365h40v40h-40zM325 405h40v40h-40z" />
        <path d="M325 405h40v40h-40zM325 445h40v40h-40z" />
        <path d="M325 445h40v40h-40zM445 125h40v40h-40z" />
        <path d="M445 125h40v40h-40zM445 165h40v40h-40z" />
        <path d="M445 165h40v40h-40zM445 205h40v40h-40z" />
        <path d="M445 205h40v40h-40zM405 125h40v40h-40z" />
        <path d="M405 125h40v40h-40zM405 165h40v40h-40z" />
        <path d="M405 165h40v40h-40zM405 205h40v40h-40z" />
        <path d="M405 205h40v40h-40zM365 125h40v40h-40z" />
        <path d="M365 125h40v40h-40zM365 165h40v40h-40z" />
        <path d="M365 165h40v40h-40zM365 205h40v40h-40z" />
        <path d="M365 205h40v40h-40zM445 245h40v40h-40z" />
        <path d="M445 245h40v40h-40zM445 285h40v40h-40z" />
        <path d="M445 285h40v40h-40zM445 325h40v40h-40z" />
        <path d="M445 325h40v40h-40zM405 245h40v40h-40z" />
        <path d="M405 245h40v40h-40zM405 285h40v40h-40z" />
        <path d="M405 285h40v40h-40zM405 325h40v40h-40z" />
        <path d="M405 325h40v40h-40zM365 245h40v40h-40z" />
        <path d="M365 245h40v40h-40zM365 285h40v40h-40z" />
        <path d="M365 285h40v40h-40zM365 325h40v40h-40z" />
        <path d="M365 325h40v40h-40zM445 365h40v40h-40z" />
        <path d="M445 365h40v40h-40zM445 405h40v40h-40z" />
        <path d="M445 405h40v40h-40zM445 445h40v40h-40z" />
        <path d="M445 445h40v40h-40zM405 365h40v40h-40z" />
        <path d="M405 365h40v40h-40zM405 405h40v40h-40z" />
        <path d="M405 405h40v40h-40zM405 445h40v40h-40z" />
        <path d="M405 445h40v40h-40zM365 365h40v40h-40z" />
        <path d="M365 365h40v40h-40zM365 405h40v40h-40z" />
        <path d="M365 405h40v40h-40zM365 445h40v40h-40z" />
        <path d="M365 445h40v40h-40zM205 565h40v40h-40z" />
        <path d="M205 565h40v40h-40zM205 525h40v40h-40z" />
        <path d="M205 525h40v40h-40zM205 485h40v40h-40z" />
        <path d="M205 485h40v40h-40zM165 565h40v40h-40z" />
        <path d="M165 565h40v40h-40zM165 525h40v40h-40z" />
        <path d="M165 525h40v40h-40zM165 485h40v40h-40z" />
        <path d="M165 485h40v40h-40zM125 565h40v40h-40z" />
        <path d="M125 565h40v40h-40zM125 525h40v40h-40z" />
        <path d="M125 525h40v40h-40zM125 485h40v40h-40z" />
        <path d="M125 485h40v40h-40zM245 565h40v40h-40z" />
        <path d="M245 565h40v40h-40zM245 525h40v40h-40z" />
        <path d="M245 525h40v40h-40zM245 485h40v40h-40z" />
        <path d="M245 485h40v40h-40zM285 565h40v40h-40z" />
        <path d="M285 565h40v40h-40zM285 525h40v40h-40z" />
        <path d="M285 525h40v40h-40zM285 485h40v40h-40z" />
        <path d="M285 485h40v40h-40zM325 565h40v40h-40z" />
        <path d="M325 565h40v40h-40zM325 525h40v40h-40z" />
        <path d="M325 525h40v40h-40zM325 485h40v40h-40z" />
        <path d="M325 485h40v40h-40zM445 565h40v40h-40z" />
        <path d="M445 565h40v40h-40zM445 525h40v40h-40z" />
        <path d="M445 525h40v40h-40zM445 485h40v40h-40z" />
        <path d="M445 485h40v40h-40zM405 565h40v40h-40z" />
        <path d="M405 565h40v40h-40zM405 525h40v40h-40z" />
        <path d="M405 525h40v40h-40zM405 485h40v40h-40z" />
        <path d="M405 485h40v40h-40zM365 565h40v40h-40z" />
        <path d="M365 565h40v40h-40zM365 525h40v40h-40z" />
        <path d="M365 525h40v40h-40zM365 485h40v40h-40z" />
        <path d="M365 485h40v40h-40zM485 125h40v40h-40z" />
        <path d="M485 125h40v40h-40zM485 165h40v40h-40z" />
        <path d="M485 165h40v40h-40zM485 205h40v40h-40z" />
        <path d="M485 205h40v40h-40zM525 125h40v40h-40z" />
        <path d="M525 125h40v40h-40zM525 165h40v40h-40z" />
        <path d="M525 165h40v40h-40zM525 205h40v40h-40z" />
        <path d="M525 205h40v40h-40zM565 125h40v40h-40z" />
        <path d="M565 125h40v40h-40zM565 165h40v40h-40z" />
        <path d="M565 165h40v40h-40zM565 205h40v40h-40z" />
        <path d="M565 205h40v40h-40zM485 245h40v40h-40z" />
        <path d="M485 245h40v40h-40zM485 285h40v40h-40z" />
        <path d="M485 285h40v40h-40zM485 325h40v40h-40z" />
        <path d="M485 325h40v40h-40zM525 245h40v40h-40z" />
        <path d="M525 245h40v40h-40zM525 285h40v40h-40z" />
        <path d="M525 285h40v40h-40zM525 325h40v40h-40z" />
        <path d="M525 325h40v40h-40zM565 245h40v40h-40z" />
        <path d="M565 245h40v40h-40zM565 285h40v40h-40z" />
        <path d="M565 285h40v40h-40zM565 325h40v40h-40z" />
        <path d="M565 325h40v40h-40zM485 365h40v40h-40z" />
        <path d="M485 365h40v40h-40zM485 405h40v40h-40z" />
        <path d="M485 405h40v40h-40zM485 445h40v40h-40z" />
        <path d="M485 445h40v40h-40zM525 365h40v40h-40z" />
        <path d="M525 365h40v40h-40zM525 405h40v40h-40z" />
        <path d="M525 405h40v40h-40zM525 445h40v40h-40z" />
        <path d="M525 445h40v40h-40zM565 365h40v40h-40z" />
        <path d="M565 365h40v40h-40zM565 405h40v40h-40z" />
        <path d="M565 405h40v40h-40zM565 445h40v40h-40z" />
        <path d="M565 445h40v40h-40zM85 45h40v40H85z" />
        <path d="M85 45h40v40H85zM85 85h40v40H85z" />
        <path d="M85 85h40v40H85zM45 85h40v40H45z" />
        <path d="M45 85h40v40H45zM525 85h40v40h-40z" />
        <path d="M525 85h40v40h-40zM485 85h40v40h-40z" />
        <path d="M485 85h40v40h-40zM485 45h40v40h-40z" />
        <path d="M485 45h40v40h-40zM485 525h40v40h-40z" />
        <path d="M485 525h40v40h-40zM485 485h40v40h-40z" />
        <path d="M485 485h40v40h-40zM525 485h40v40h-40z" />
        <path d="M525 485h40v40h-40zM45 485h40v40H45z" />
        <path d="M45 485h40v40H45zM85 485h40v40H85z" />
        <path d="M85 485h40v40H85zM85 525h40v40H85z" />
        <path d="M85 525h40v40H85z" />
      </g>
    </svg>
  );
};

FocalPlane.displayName = "SVG.FocalPlane";

export default FocalPlane;
