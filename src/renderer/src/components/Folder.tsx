import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Folder({ children }: Props) {
  return (
    <span className={"folder"}>{children}</span>
  );
}

export default Folder;