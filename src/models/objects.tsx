import { ReactElement } from "react";

export interface LinkObject {
  name: string,
  link: string,
}

export interface IconMenuProps {
  items: LinkObject[],
  icon: any,
}
