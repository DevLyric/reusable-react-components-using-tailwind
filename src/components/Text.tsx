import { ReactNode } from "react";

const Text = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <p className={className}>{children}</p>;
};

export default Text;
