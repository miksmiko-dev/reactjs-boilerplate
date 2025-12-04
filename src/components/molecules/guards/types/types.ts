import type { JSX } from "react";

export interface AuthGuardProps {
  allowedRoles: string;
  children: JSX.Element;
}
