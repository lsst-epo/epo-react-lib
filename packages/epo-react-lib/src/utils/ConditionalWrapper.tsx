import { FunctionComponent, PropsWithChildren, ReactNode } from "react";

interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (child: ReactNode) => ReactNode;
}

const ConditionalWrapper: FunctionComponent<
  PropsWithChildren<ConditionalWrapperProps>
> = ({ condition, wrapper, children }) => (
  <>{condition ? wrapper(children) : children}</>
);

ConditionalWrapper.displayName = "Util.ConditionalWrapper";

export default ConditionalWrapper;
