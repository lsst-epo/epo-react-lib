import { FunctionComponent } from "react";
import CircularLoader from "@rubin-epo/epo-react-lib/CircularLoader";
import * as Styled from "./styles";

type Props = {
  className?: string;
};

const Loader: FunctionComponent<Props> = ({ className }) => {
  return (
    <Styled.LoaderWrapper className={className}>
      <CircularLoader isVisible />
    </Styled.LoaderWrapper>
  );
};

Loader.displayName = "Widgets.Loader";

export default Loader;
