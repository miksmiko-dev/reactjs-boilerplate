import type { ReactNode } from "react";

type ChildrenType = {
  path: string;
  component: ReactNode;
  role: string;
};
export interface NavigationTypes {
  path: string;
  name: string;
  role: string;
  icon: ReactNode;
  // component: ComponentType;
  component: ReactNode;
  isAdmin: boolean;
  isShow: boolean;
  children?: ChildrenType[];
}
