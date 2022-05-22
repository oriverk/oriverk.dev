import React from "react";
import { styled } from "goober";

interface PassedProps {
  children: React.ReactNode;
}

interface Props extends PassedProps {
  className?: string;
}

const Component = (props: Props) => {
  const { className, children } = props;
  return <main className={className}>{children}</main>;
};

const StyledComponent = styled(Component)`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerComponent: React.FC<PassedProps> = (props) => <StyledComponent {...props} />;

export const Main = ContainerComponent;
