import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const ShareCopyUrl: FunctionComponent<SVGProps> = ({
  className,
  size = 26,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 26 26",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path
        d="M33.6,622.3q.181.241.384.467a5.574,5.574,0,0,1-.384-.467"
        transform="translate(-32.334 -598.851)"
      />
      <path
        d="M20.8,602.4a6.329,6.329,0,0,0,.482.75,6.336,6.336,0,0,1-.482-.75"
        transform="translate(-20.016 -579.701)"
      />
      <path
        d="M202,396.2h0a6.331,6.331,0,0,0,1.161,1.843A6.331,6.331,0,0,1,202,396.2"
        transform="translate(-194.388 -381.271)"
      />
      <path
        d="M11.424,202.26l-2.363,2.363-.143.136-.147.128L8.617,205a3.81,3.81,0,0,1-1.176.584l-.181.049a3.682,3.682,0,0,1-.362.072,3.533,3.533,0,0,1-.366.034c-.094,0-.188,0-.283,0a3.828,3.828,0,0,1-2.306-.844,3.833,3.833,0,0,0,.332.237,3.843,3.843,0,0,1-1.76-3.418,3.862,3.862,0,0,0,.177,1.357,3.866,3.866,0,0,1-.177-1.357,3.527,3.527,0,0,1,.034-.366,3.678,3.678,0,0,1,.072-.362q.023-.09.049-.181a3.813,3.813,0,0,1,.7-1.334,3.861,3.861,0,0,1,.264-.29l2.363-2.363L7.17,195.65h0l2.589-2.589a3.851,3.851,0,0,1,.55-.456h0a3.829,3.829,0,0,1,.445-.26l.177-.083h0l.026-.011.026-.011h0a3.834,3.834,0,0,1,.512-.173l.049-.011h0l.252-.053.049-.008h0l.268-.038a3.878,3.878,0,0,1,.554-.011l.177.011h.008q.185.019.366.053a3.836,3.836,0,0,1,3.033,3.033q.034.181.053.366v.008l2.065-2.069a6.364,6.364,0,0,0-3.463-3.463l-.32-.121q-.294-.1-.592-.173t-.6-.121h-.038c-.188-.026-.381-.045-.573-.053s-.407-.011-.61,0a6.379,6.379,0,0,0-4.2,1.858L5.84,193.4l-4,3.994a6.436,6.436,0,0,0-.437.482,6.327,6.327,0,0,0-1.119,2.061l-.026.087q-.041.139-.079.283a6.4,6.4,0,0,0,.584,4.661,5.1,5.1,0,0,1-.256-.528,6.338,6.338,0,0,0,1.338,1.963c.087.087.177.17.268.252s.241.207.366.3l.128.094a6.386,6.386,0,0,0,7.77-.211,6.388,6.388,0,0,1-6.832.78,6.357,6.357,0,0,0,7.314-1.217l4-4a7.823,7.823,0,0,1-3.429-.155"
        transform="translate(0.023 -182.273)"
      />
      <path
        d="M290.6,264.523l.049-.023-.026.011-.023.011"
        transform="translate(-279.65 -254.533)"
      />
      <path
        d="M219.661,9.351q.147-.279.264-.565a6.375,6.375,0,0,0-8.3-8.3q-.286.117-.565.264a6.352,6.352,0,0,0-1.541,1.134l-4,4a7.823,7.823,0,0,1,3.429.154L211.3,3.673a3.817,3.817,0,0,1,1.8-1.014,3.679,3.679,0,0,1,.362-.072,3.836,3.836,0,0,1,4.352,4.352,3.42,3.42,0,0,1-.072.362,3.817,3.817,0,0,1-1.014,1.8l-2.363,2.363L213.2,12.641l-2.589,2.589-.143.136a3.831,3.831,0,0,1-.3.245l-.105.072h0a3.821,3.821,0,0,1-1.432.6q-.181.034-.366.053a3.634,3.634,0,0,1-.369.019q-.181,0-.358-.015a3.825,3.825,0,0,1-2.355-1.108l-.147-.158a3.817,3.817,0,0,1-.927-1.963c-.011-.079-.023-.154-.03-.234h0L202,14.947a6.338,6.338,0,0,0,1.387,2.076c.083.083.166.162.252.237a6.326,6.326,0,0,0,1.669,1.078l.158.068.283.106a6.383,6.383,0,0,0,1.27.313h0a6.425,6.425,0,0,0,1.443.034l.3-.034.332-.053.268-.057.245-.06-.053.015.053-.015a6.327,6.327,0,0,0,2.265-1.157q.147-.119.294-.249c.1-.087.158-.147.237-.226l2.129-2.129,3.99-4a6.35,6.35,0,0,0,1.134-1.541m-15.8,8.1a6.332,6.332,0,0,0,.772.539,6.332,6.332,0,0,1-.772-.539"
        transform="translate(-194.388 -0.018)"
      />
    </svg>
  );
};

ShareCopyUrl.displayName = "SVG.ShareCopyUrl";

export default ShareCopyUrl;
